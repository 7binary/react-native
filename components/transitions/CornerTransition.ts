import { HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';

interface ICardStyleInterpolator {
  cardStyle?: {transform: any};
  overlayStyle?: {opacity: any};
}

interface ITransition {
  gestureDirection?: any;
  transitionSpec?: {open: any, close: any};
  headerStyleInterpolator?: any;
  cardStyleInterpolator?: (props: any) => ICardStyleInterpolator;
}

const CornerTransition: ITransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: (props: any): ICardStyleInterpolator => {
    const {current, next, layouts} = props;
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9],
              })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

export default CornerTransition;