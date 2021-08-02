import React from 'react';
import MyComponent from './MyComponent';

export default function (){
            return (
                <div id='App'>
                    {/*props01={"Hello World"} : Not Required, Default Value */}
                    <MyComponent
                        props02={ 1 }
                        props03={true}
                        props04={ {no:3} }
                        props05={[1,2,3,4,5]}
                        props06={ () => '함수'}
                        props07={`adkljfas91`}
                        props08={[ true, false, true ]}
                        props09={{
                            no: 1,
                            name:'dolly',
                            email:"afdasdf@fadfa"
                        }}

                    />
                </div>
        );
}