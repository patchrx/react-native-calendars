import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import ProgressCircle from 'react-native-progress-circle';
import styleConstructor from './style';
import {shouldUpdate} from '../../../component-updater';


function ProgressIndictor(props) {
    const {showProgress, indicatorStyle, children} = props;

    // console.log('in progressIndictor:', showProgress, indicatorStyle)
    return (
        <>
            {showProgress ? 
            (<ProgressCircle
                percent={indicatorStyle.progress}
                radius={indicatorStyle.width/2}
                borderWidth={indicatorStyle.borderWidth}
                containerStyle={indicatorStyle.containerStyle}
                outerCircleStyle = {indicatorStyle.outerCircleStyle}
                color={indicatorStyle.color}
                shadowColor={indicatorStyle.backgroundColor}
                bgColor={indicatorStyle.backgroundColor}
                >
                {children}
             </ProgressCircle>)
             :
             (
                 <>
             {children}
                 </>
             )
            }
        </>
    );
}

export default ProgressIndictor;
