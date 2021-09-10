import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import EventsTable from './EventsTable';
import EventsHeader from './EventsHeader';
import reducer from './store/reducers';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function Events(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('examplePage');

	return (
		<FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <EventsHeader/>
            }
            content={
                <EventsTable/>
            }
            innerScroll
        />
	);
}

export default withReducer('eventStore', reducer)(Events);
