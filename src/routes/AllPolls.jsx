// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
import "../allPolls.css";
import { Container } from "@mui/material";
import React from "react";
import SinglePoll from "../components/SinglePoll";
function AllPolls(props) {
  const [state, setState] = React.useState(null);
  React.useEffect(function () {
    fetch("http://localhost:9000/poll/allPolls")
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log("Data from the allPolls route", data);
        setState(function (oldState) {
          return data;
        });
      });
  }, []);
  console.log("state = ", state);
  return (
    <Container maxWidth="xl">
      <div className="poll-wrapper">
        {state
          ? state.map((pollData, index) => {
              return (
                <SinglePoll
                  key={index * 10}
                  title={pollData.title}
                  description={pollData.description}
                />
              );
            })
          : "Please wait...."}
      </div>
    </Container>
  );
  // const [value, setValue] = React.useState("1");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // return (
  //   <Box sx={{ width: "100%", typography: "body1" }}>
  //     <TabsContext value={value}>
  //       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  //         <TabList onChange={handleChange} aria-label="lab API tabs example">
  //           <Tab label="Item One" value="1" />
  //           <Tab label="Item Two" value="2" />
  //           <Tab label="Item Three" value="3" />
  //         </TabList>
  //       </Box>
  //       <TabPanel value="1">Item One</TabPanel>
  //       <TabPanel value="2">Item Two</TabPanel>
  //       <TabPanel value="3">Item Three</TabPanel>
  //     </TabsContext>
  //   </Box>
  // );
}

export default AllPolls;
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
