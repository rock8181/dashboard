import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export class SparkLine extends React.PureComponent {
    render() {
        const { currentColor } = this.props;
        return (
        <SparklineComponent id='sparkline' height='200px' 
        width='500px' axisSettings={{
            minX: -1, maxX: 7, maxY: 8, minY: -1
        }} fill={currentColor} valueType='Category' xName='x' yName='y' dataSource={[
            { x: 'Mon', y: 3 },
            { x: 'Tue', y: 5 },
            { x: 'Wed', y: 2 },
            { x: 'Thu', y: 4 },
            { x: 'Fri', y: 6 },
        ]}
        border={{ color: currentColor, width: 2 }} 
        // To enable tooltip for sparkline
        tooltipSettings={{
            visible: true,
            // formatting tooltip text
            format: '${x} : ${y}'
        }}>
    <Inject services={[SparklineTooltip]}/>
</SparklineComponent>);
    }
}
// const SparkLine = ({ id, height, width, lineColor, data, type, currentColor }) =>{
//      return (       
//       <SparklineComponent
//         id={id}
//         height={height}
//         width={width}
//         lineWidth={1}
//         valueType="Numeric"
//         fill='#7352FF'
//         border={{ color: currentColor, width: 2 }}
//         tooltipSettings={{
//           visible: true,
//           // eslint-disable-next-line no-template-curly-in-string
//           format: '${x} : data ${yval}',
//           trackLineSettings: {
//             visible: true,
//           },
//         }}
//         markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
//         dataSource={data}
//         xName="x"
//         yName="yval"
//         type={type}
//       >
//         <Inject services={[SparklineTooltip]} />
//       </SparklineComponent>
//     );
//   }
// class SparkLine extends React.PureComponent {
  
//   render() {
//     const { id, height, width, color, data, type, currentColor } = this.props;

//     return (
//       <div>
//       <SparklineComponent
//         id={currentColor}
//         height={height}
//         width={width}
//         lineWidth={1}
//         valueType="Numeric"
//         fill="#7352FF"
//         border={{ color: currentColor, width: 2 }}
//         tooltipSettings={{
//           visible: true,
//           // eslint-disable-next-line no-template-curly-in-string
//           format: '${x} : data ${yval}',
//           trackLineSettings: {
//             visible: true,
//           },
//         }}
//         markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
//         dataSource={data}
//         xName="x"
//         yName="yval"
//         type={type}
//       >
//         <Inject services={[SparklineTooltip]} />
//       </SparklineComponent>
//       </div>
//       </SparklineComponent>
//     );
//   }
// }

export default SparkLine;