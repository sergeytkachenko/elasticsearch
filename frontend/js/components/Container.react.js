import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

class Container extends React.Component {

	render() {
		return (
			<div className="container">
				<MuiThemeProvider>
					<LinearProgress mode="indeterminate" />
				</MuiThemeProvider>
				<MuiThemeProvider>
					<Card>
						<CardHeader
							title="URL Avatar"
							subtitle="Subtitle"
							avatar="https://s-media-cache-ak0.pinimg.com/236x/a4/41/e4/a441e4a0d1c0c48cc76c413f0390b016.jpg"
						/>
						<CardMedia
							overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
						>
							<img src="http://cdn.funkidslive.com/wp-content/uploads/2015/05/shutterstock_65735200.jpg" />
						</CardMedia>
						<CardTitle title="Card title" subtitle="Card subtitle" />
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
							Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
							Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
						</CardText>
						<CardActions>
							<FlatButton label="Action1" />
							<FlatButton label="Action2" />
						</CardActions>
					</Card>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default Container;