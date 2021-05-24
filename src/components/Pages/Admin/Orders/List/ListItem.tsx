import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useMask, { Masks } from 'hooks/useMask';
import IOrder from 'interfaces/models/order';
import React, { memo } from 'react';

interface IProps {
  order: IOrder;
  mask?: Masks;
  onEdit: (user: IOrder) => void;
  onDeleteComplete: () => void;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;
  const { maskClean, maskedValue } = useMask('money', order.value);
  maskClean(order.value);
  return (
    <TableRow>
      <TableCell>{maskedValue ?? ''}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCell>{order.description}</TableCell>
    </TableRow>
  );
});

export default ListItem;
