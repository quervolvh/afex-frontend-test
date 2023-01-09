import * as tradeActions from 'redux/types/tradeTypes';
import { encryptionManager } from 'service/EncryptionManager';

const initialState = {

  logs: {

    messages: [],

    loader: true

  },

  products: {
    
    items: [],

    loader: true

  }

};

const getMessage = (messages: { [key: string]: any }[]) => {

  try {

    const decryptedLogs = messages.map((log) => encryptionManager.decrypt(log));

    return decryptedLogs;


  } catch (error: any) {

    return [];

  }

}

const tradeReducer = (state = initialState, action: { [key: string]: any }) => {

  switch (action.type) {

    case tradeActions.RETRIEVE_TRADE_LOGS_SUCCESS:

      return {
        ...state,

        logs: {

          loader: false,

          messages: getMessage(action?.payload?.messages)

        }

      };

    case tradeActions.RETRIEVE_PRODUCTS_SUCCESS:

      return {
        ...state,

        products: {

          loader: false,

          items: getMessage(action?.payload?.data)

        }

      };

    default:
      return state;
  }
};

export default tradeReducer;
