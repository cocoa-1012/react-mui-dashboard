import React, {useEffect, useState} from 'react';
import {Icon, Table, TableBody, TableCell, TablePagination, TableRow, Checkbox} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import _ from '@lodash';
import EventsTableHead from './EventsTableHead';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';

function EventsTable(props)
{
    const dispatch = useDispatch();
    const events = useSelector(({eventStore}) => eventStore.events.data);
    const searchText = useSelector(({eventStore}) => eventStore.events.searchText);

    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(events);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id       : null
    });

    useEffect(() => {
        dispatch(Actions.getEvents());
    }, [dispatch]);

    useEffect(() => {
        setData(searchText.length === 0 ? events : _.filter(events, item => item.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [events, searchText]);

    function handleRequestSort(event, property)
    {
        const id = property;
        let direction = 'desc';

        if ( order.id === property && order.direction === 'desc' )
        {
            direction = 'asc';
        }

        setOrder({
            direction,
            id
        });
    }

    function handleSelectAllClick(event)
    {
        if ( event.target.checked )
        {
            setSelected(data.map(n => n.id));
            return;
        }
        setSelected([]);
    }

    function handleClick(item)
    {
        props.history.push('/events/' + item.id + '/' + item.handle);
    }

    function handleCheck(event, id)
    {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if ( selectedIndex === -1 )
        {
            newSelected = newSelected.concat(selected, id);
        }
        else if ( selectedIndex === 0 )
        {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if ( selectedIndex === selected.length - 1 )
        {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if ( selectedIndex > 0 )
        {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    }

    function handleChangePage(event, page)
    {
        setPage(page);
    }

    function handleChangeRowsPerPage(event)
    {
        setRowsPerPage(event.target.value);
    }

    function removedSelected() {
        dispatch(Actions.deleteEvents(selected));
    }

    return (
        <div className="w-full flex flex-col">

            <FuseScrollbars className="flex-grow overflow-x-auto">

                <Table className="min-w-xl" aria-labelledby="tableTitle">

                    <EventsTableHead
                        numSelected={selected.length}
                        order={order}
                        removedSelected={removedSelected}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                    />

                    <TableBody>
                        {_.orderBy(data, [
                            (o) => {
                                switch ( order.id )
                                {
                                    case 'categories':
                                    {
                                        return o.categories[0];
                                    }
                                    default:
                                    {
                                        return o[order.id];
                                    }
                                }
                            }
                        ], [order.direction])
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(n => {
                                const isSelected = selected.indexOf(n.id) !== -1;
                                return (
                                    <TableRow
                                        className="h-64 cursor-pointer"
                                        hover
                                        role="checkbox"
                                        aria-checked={isSelected}
                                        tabIndex={-1}
                                        key={n.id}
                                        selected={isSelected}
                                        onClick={event => handleClick(n)}
                                    >
                                        <TableCell className="w-48 px-4 sm:px-12" padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                                onClick={event => event.stopPropagation()}
                                                onChange={event => handleCheck(event, n.id)}
                                            />
                                        </TableCell>

                                        <TableCell className="w-52" component="th" scope="row" padding="none">
                                            {!!n.images && n.images.length > 0 && n.featuredImageId ? (
                                                <img className="w-full block rounded" src={_.find(n.images, {id: n.featuredImageId}).url} alt={n.name}/>
                                            ) : (
                                                <img className="w-full block rounded" src="assets/images/ecommerce/product-image-placeholder.png" alt={n.name}/>
                                            )}
                                        </TableCell>

                                        <TableCell component="th" scope="row">
                                            {n.name}
                                        </TableCell>

                                        <TableCell className="truncate" component="th" scope="row">
                                            {(n.description.length > 60) ? n.description.substr(0, 59) + '...' : n.description}
                                        </TableCell>

                                        <TableCell component="th" scope="row" align="right">
                                            <span>$</span>
                                            {n.totalPrice}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </FuseScrollbars>

            <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page'
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page'
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default withRouter(EventsTable);
