const dataExample = [
	{
		company: 'Alfreds <b>Futterkiste</b>',
		chef: 'Maria Anders',
		country: 'Germany'
	},
	{
		company: 'Centro comercial <b>Moctezuma</b>',
		chef: 'Francisco Chang',
		country: 'Mexico'
	},
	{
		company: 'Ernst Handel',
		chef: 'Roland Mendel',
		country: 'Austria',
	},
	{
		company: 'Island Trading',
		chef: 'Helen Bennett',
		country: 'UK'
	},
	{
		company: 'Laughing Bacchus Winecellars',
		chef: 'Yoshi Tannamuri',
		country: 'Canada',
	}
];

let gridView = new GridView()
const data = {
	header : 'Companys table',
	headerClass : ['header', 'big'],
	data: dataExample,
	atribute : {
    'company': {
        'label': 'Компания',
        'src': 'html'
    },
    'chef': {
        'label': 'Директор',
    },
    'country': {
        'label': 'Страна',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map'
            }
            return data['country'];
        }
    	}
	}
}
gridView.render(data)

