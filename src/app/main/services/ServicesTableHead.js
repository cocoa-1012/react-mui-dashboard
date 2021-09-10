import React, {useState, useEffect} from 'react';
import {TableHead, TableSortLabel, TableCell, TableRow, Checkbox, Tooltip, IconButton, Icon, Menu, MenuList, MenuItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';

const rows = [
    {
        id            : 'image',
        align         : 'left',
        disablePadding: true,
        label         : '',
        sort          : false
    },
    {
        id            : 'name',
        align         : 'left',
        disablePadding: false,
        label         : 'Name',
        sort          : true
    },
    {
        id            : 'description',
        align         : 'left',
        disablePadding: false,
        label         : 'Description',
        sort          : true
    },
    {
        id            : 'totalPrice',
        align         : 'right',
        disablePadding: false,
        label         : 'Price',
        sort          : true
    },
    // {
    //     id            : 'quantity',
    //     align         : 'right',
    //     disablePadding: false,
    //     label         : 'Quantity',
    //     sort          : true
    // },
    // {
    //     id            : 'active',
    //     align         : 'right',
    //     disablePadding: false,
    //     label         : 'Active',
    //     sort          : true
    // }
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

function ServicesTableHead(props)
{
    const classes = useStyles(props);
    const dispatch = useDispatch();

    const [selectedServicesMenu, setSelectedServicesMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedServicesMenu(event)
    {
        setSelectedServicesMenu(event.currentTarget);
    }

    function closeSelectedServicesMenu()
    {
        setSelectedServicesMenu(null);
    }

    return (
        <TableHead>
            <TableRow className="h-64">
                <TableCell padding="checkbox" className="relative pl-4 sm:pl-12">
                    <Checkbox
                        indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                        checked={props.numSelected === props.rowCount}
                        onChange={props.onSelectAllClick}
                    />
                    {props.numSelected > 0 && (
                        <div className={clsx("flex items-center justify-center absolute w-64 top-0 left-0 ml-68 h-64 z-10", classes.actionsButtonWrapper)}>
                            <IconButton
                                aria-owns={selectedServicesMenu ? 'selectedServicesMenu' : null}
                                aria-haspopup="true"
                                onClick={openSelectedServicesMenu}
                            >
                                <Icon>more_horiz</Icon>
                            </IconButton>
                            <Menu
                                id="selectedServicesMenu"
                                anchorEl={selectedServicesMenu}
                                open={Boolean(selectedServicesMenu)}
                                onClose={closeSelectedServicesMenu}
                            >
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            props.removedSelected();
                                            closeSelectedServicesMenu();
                                        }}
                                    >
                                        <ListItemIcon className="min-w-40">
                                            <Icon>delete</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary="Remove"/>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    )}
                </TableCell>
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                <Tooltip
                                    title="Sort"
                                    placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={props.order.id === row.id}
                                        direction={props.order.direction}
                                        onClick={createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default ServicesTableHead;
