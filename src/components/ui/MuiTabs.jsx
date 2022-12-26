import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

/*Props
- componentList: List of components
  - A component in componentList will include 2 fields: label and data
    - label(String): the label in tab list
    - data(element): the data
- Example componentList:
    const components = [
      {
        label: 'Tab 1',
        data: <p>Hello World 1</p>,
      },
      {
        label: 'Tab 2',
        data: <p>Hello World 2</p>,
      },
    ];
*/

export default function MuiTabs({
  componentList,
  backgroundColor,
  textColor,
  fontSize,
  fontWeight,
  tabColor,
  tabRadius,
  tabHeight,
  indicatorColor,
  indicatorHeight,
}) {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="h-full">
      <TabContext value={value}>
        <Box className="shadow-[0_0_15px_0_rgba(0,0,0,0.3)]">
          <TabList
            data-testid="test-tablist"
            onChange={handleChange}
            sx={{
              '& .MuiTabs-flexContainer': {
                backgroundColor: backgroundColor ? backgroundColor : '',
                height: tabHeight ? tabHeight : '56px',
              },

              '& .MuiButtonBase-root': {
                color: textColor ? textColor : 'black',
                backgroundColor: tabColor ? tabColor : '',
                borderRadius: tabRadius ? tabRadius : '',
                fontSize: fontSize ? fontSize : '16px',
                fontWeight: fontWeight ? fontWeight : '',
                textTransform: 'none',
              },

              '& .MuiButtonBase-root: focus, .MuiTabs-indicator:focus': {
                color: '#0E46C7',
              },

              '& .MuiButtonBase-root: hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: indicatorColor ? indicatorColor : '',
                height: indicatorHeight ? indicatorHeight : '4px',
              },
            }}
          >
            {componentList.map((component, index) => (
              <Tab data-testid={`test-nav-${index}`} key={index} value={`${index}`} label={component.label} />
            ))}
          </TabList>
        </Box>
        {componentList.map((data, index) => (
          <TabPanel
            key={index}
            value={`${index}`}
            sx={{
              '& .MuiTabPanel-root': {
                padding: '0px',
              },
            }}
          >
            {data.data}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
