import React, {FC} from 'react';
import {Background} from './components/Background';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon, Icons} from './lib/icons';
import {NavigationHeader} from './NavigationHeader';
import {View, StyleSheet} from 'react-native';
import {Colors} from './lib/colors';
import {fontName} from './lib/vars';
import {DoneButton} from './components/DoneButton';
import {SelectionGroup} from './components/SelectionGroup';
import styled from 'styled-components/native';
import {FancyGradientChart} from './FancyGradientChart';
import {createDataPoint, getGraphDate} from './DetailedReportScreen';

type Props = {
  navigation: StackNavigationProp<{}>;
};

export const SoreThroatInputScreen: FC<Props> = ({navigation}) => {
  return (
    <Background>
      <NavigationHeader title={'TRACKING SORE THROAT'} showBackButton />
      <View style={{flexDirection: 'row'}}>
        <Icon style={styles.emojiStyle} source={Icons.Weary} />
        <FancyGradientChart
          data={[
            createDataPoint(getGraphDate(24), 1),
            createDataPoint(getGraphDate(25), 1),
            createDataPoint(getGraphDate(26), 2),
            createDataPoint(getGraphDate(27), 2),
            createDataPoint(getGraphDate(28), 3),
          ]}
        />
      </View>
      <SelectionGroup
        title="describe the feeling"
        onOptionSelected={() => {}}
        options={[
          {title: 'easy to gulp', color: '#8cf081'},
          {title: 'scratchy', color: '#FFBC5C'},
          {title: 'difficult to swallow', color: '#FF7A7A'},
        ]}
      />
      <Divider />
      <SelectionGroup
        title="how does the back throat lookk like?"
        onOptionSelected={() => {}}
        options={[{title: 'not inflamed'}, {title: 'inflamed & red'}]}
      />
      <View style={styles.center}>
        <DoneButton style={{paddingTop: 50}} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  tempInputContainer: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.buttonBorder,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  tempInputText: {
    color: 'white',
    fontFamily: fontName,
    fontWeight: '500',
    fontSize: 48,
    lineHeight: 61,
  },
  center: {
    width: '100%',
    alignItems: 'center',
  },
  emojiStyle: {
    position: 'absolute',
    bottom: '30%',
  },
});

const Divider = styled.View`
  border-top-width: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
`;