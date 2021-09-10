import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import PackagesTable from './PackagesTable';
import PackagesHeader from './PackagesHeader';
import reducer from './store/reducers';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function Packages(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('examplePage');

	return (
		<FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <PackagesHeader/>
            }
            content={
                <PackagesTable/>
            }
            innerScroll
        />
	);
}

export default withReducer('packageStore', reducer)(Packages);
