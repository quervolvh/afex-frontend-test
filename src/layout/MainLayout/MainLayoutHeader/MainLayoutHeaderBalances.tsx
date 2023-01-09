import React from 'react';
import { ArrowRight, ViewFormatter } from 'components';

export const MainLayoutHeaderBalances: React.FC = ({}) => {

  return (
   

          <div className='main-layout-topBar-balances'>

            <div 
            
              className='main-layout-topBar-balances-arrow' 
              
              dangerouslySetInnerHTML={{ __html : ArrowRight }} 
              
            />

            {[

              {

                title: "CASH BALANCE",
                value: "₦8,374,763"

              },

              {

                title: "SECURITIES VALUE",
                value: "₦8,374,763"

              },

              {

                title: "LOAN BALANCE",
                value: "₦7,542,246"

              },

            ].map((item) => <ViewFormatter key={`header-item-${item.title}`} {...item} />


            )}

          </div>

        
  );
};
