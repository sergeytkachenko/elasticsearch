import React from 'react';
import mixins from 'es6-mixins';
import BackboneMixin from '../mixins/BackboneMixin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFindInPage from 'material-ui/svg-icons/action/find-in-page';

import {List, ListItem} from 'material-ui/List';
import TimeLineAction from 'material-ui/svg-icons/action/timeline';
import ListAction from 'material-ui/svg-icons/action/list';

import AppActions from '../action/AppActions';

class Search extends React.Component {

	constructor(props) {
		super(props);
		mixins(BackboneMixin, this);
		this.state = {
			section: 1,
			user: 1,
			sizeInPage: 10,
			value: '',
			searchDisabled: false,
			url: 'http://localhost:9200/demo/_search'
		};
	}

	onChangeValue(event, index, value) {
		this.setState({value: event.target.value});
	}

	onChangeSection(event, index, value) {
		this.setState({section: value});
	}

	onChangeUser(event, index, value) {
		this.setState({user: value});
	}

	onChangeSizeInPage(event, index, value) {
		this.setState({sizeInPage: value});
	}

	search() {
		AppActions.getSearchItems({
			url: this.state.url,
			q: this.state.value,
			size: this.state.sizeInPage,
			user: this.state.user,
			section: this.state.section
		});
	}

	render() {
		return(
			<div className="search">

				<MuiThemeProvider>
					<RaisedButton fullWidth={true}
								  label="Найти"
								  labelPosition="before"
								  icon={<ActionFindInPage />}
								  onTouchTap={this.search.bind(this)}
					/>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<TextField fullWidth={true}
						hintText="Что нужно искать?"
						floatingLabelText="Введите запрос"
						value={this.state.value}
					   	onChange={this.onChangeValue.bind(this)}
					/>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<SelectField value={this.state.section} onChange={this.onChangeSection.bind(this)} fullWidth={true}
								 floatingLabelText="В каком разделе находимся?">
						<MenuItem value={1} primaryText="Активности" />
						<MenuItem value={2} primaryText="Контакты" />
						<MenuItem value={3} primaryText="Контрагенты" />
					</SelectField>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<SelectField value={this.state.user} onChange={this.onChangeUser.bind(this)} fullWidth={true}
								 floatingLabelText="Текущий пользователь">
						<MenuItem value={1} primaryText="Администратор" />
						<MenuItem value={2} primaryText="Василий Иванов" />
					</SelectField>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<SelectField value={this.state.sizeInPage} onChange={this.onChangeSizeInPage.bind(this)} fullWidth={true}
								 floatingLabelText="Количество записей на страницу?">
						<MenuItem value={10} primaryText="10 записей на страницу" />
						<MenuItem value={20} primaryText="20 записей на страницу" />
						<MenuItem value={50} primaryText="50 записей на страницу" />
						<MenuItem value={75} primaryText="75 записей на страницу" />
						<MenuItem value={100} primaryText="100 записей на страницу" />
					</SelectField>
				</MuiThemeProvider>
				<MuiThemeProvider>
					{this.props.collection.total !== null
						? <List className="search-info">
							<ListItem primaryText={ "Время поиска " +  + this.props.collection.took + " ms "}
									  leftIcon={<TimeLineAction />} />
							<ListItem primaryText={ "Все найдено записей " + this.props.collection.total }
									  leftIcon={<ListAction />} />
						  </List>
						: <div></div>
					}
				</MuiThemeProvider>
			</div>
		);
	}
}

export default Search;