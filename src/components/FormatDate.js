import { parseISO, format } from 'date-fns';

/* Function takes a props consisting of: */
/* 1. dateString: date/time string in ISO format */
/* 2. want: the date/time format to return */
/* and return the date/time in the format requested */
export default function FormatDate(props) {
	const date = parseISO(props.dateString);
	let fmt = 'LLLL d, yyyy, KK:mm b'
	switch (props.want) {
		case 'day':
			fmt = 'd'
			return <time dateTime={props.dateString}>{format(date, fmt)}</time>
		case 'mon':
			fmt = 'MMMM'
			return <time dateTime={props.dateString}>{format(date, fmt)}</time>
		case 'hmb':
			fmt = 'KK:mm b'
			return <time dateTime={props.dateString}>{format(date, fmt)}</time>
		default:
			return <time dateTime={props.dateString}>{format(date, fmt)}</time>
	}
}
