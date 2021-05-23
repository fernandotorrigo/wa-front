import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IOrder from 'interfaces/models/order';
import React, { memo } from 'react';

interface IProps {
  order: IOrder;
  onEdit: (user: IOrder) => void;
  onDeleteComplete: () => void;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;

  return (
    <TableRow>
      <TableCell>{order.description}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCell>{order.value}</TableCell>
    </TableRow>
  );
});

export default ListItem;
