import React, { useEffect } from 'react';
import { MainLayout } from 'layout';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions';
import { useSocketStream } from 'hooks/useSocketStream';
import { isObj } from 'utils';
import { TradeLog } from 'common/TradeLog';
import { retrieveTradeLog } from 'redux/actions/TradeActions';
import { ProductLog } from 'common/ProductLog';
import { BoardSelector } from 'common/ProductLog/BoardSelector';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    useEffect(() => {

        const attemptLogin = async () => {

            await dispatch(login({

                "email": "quervolvh@gmail.com",

                "password": "jamesDean",

            }));

        };

        attemptLogin();

        // eslint-disable-next-line
    }, []);

    useSocketStream(

        "wss://comx-sand-api.afexnigeria.com/stream/trades",

        (e: unknown) => {

            if (isObj(e)) {

                const value = e as { [key: string]: any };

                dispatch(retrieveTradeLog(value));

            }

        }

    );

    return (

        <MainLayout
            title={"comX"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
        >
            <BoardSelector />

            <ProductLog />

            <TradeLog />


        </MainLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
