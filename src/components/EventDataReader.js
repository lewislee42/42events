import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getSortedEvtsData(props) {
	const evtsDirectory = path.join(process.cwd(), props.path);
	// Get file names under /events
	const fileNames = fs.readdirSync(evtsDirectory);
	const allEvtsData = await Promise.all(fileNames.map(async (fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(evtsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the evt metadata section
		const matterResult = matter(fileContents);
		const contentsMd = matterResult.content;

		// Use remark-html to convert MD contents to Html
		const processedContent = await remark()
			.use(html)
			.process(matterResult.content);
		const contentsHtml = processedContent.toString();

		// Combine the data with the id
		return {
			id,
			contentsHtml,
			...matterResult.data,
		};
	}));
	// Sort evts by date
	return allEvtsData.sort((a, b) => {
		if (a.when > b.when) {
			return 1;
		} else {
			return -1;
		}
	});
}
