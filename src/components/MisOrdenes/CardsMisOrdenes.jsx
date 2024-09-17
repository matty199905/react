import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import Loader from '../../components/UI/Loader/Loader'

const CardsMisOrdenes = () => {

const {error, loading, orders} = useSelector(state => state.orders)

if (loading && !orders) {
  return <Loader/>
}

if (error) {
  return <h2>{error}</h2>
}

  return (
    <MisOrdenesContainerStyled>
      {
      orders?.length ? orders.map((order) => {
        return  <CardMisOrdenes {...order} key={order._id} />
      }) :  <h2>{'Que estas esperando para hacer tu primera orden?'}</h2>
      
      }
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
