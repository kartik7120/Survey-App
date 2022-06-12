import { Card, CardContent, Typography } from "@mui/material";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function SocialMediaShareButtons(props) {
  return (
    <Card
      sx={{
        width: "40%",
        borderRadius: "3em",
        margin: "3%",
        minWidth: "25em",
      }}
    >
      <Typography variant="h3" component="h1" textAlign="center">
        Share
      </Typography>
      <CardContent style={{ display: "flex", justifyContent: "space-evenly" }}>
        <RedditShareButton
          url="http://localhost:3000/poll/6290601894c72cbd8787af53"
          children={<div></div>}
          openShareDialogOnClick
          title={props.state.title}
        >
          <RedditIcon round={true}></RedditIcon>
        </RedditShareButton>
        <FacebookShareButton
          url="http://localhost:3000/poll/6290601894c72cbd8787af53"
          children={<div></div>}
          openShareDialogOnClick
          hashtag="Poll"
        >
          <FacebookIcon round={true}></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton
          url="http://localhost:3000/poll/6290601894c72cbd8787af53"
          children={<div></div>}
          openShareDialogOnClick
          title={props.state.title}
        >
          <WhatsappIcon round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <TwitterShareButton
          url="http://localhost:3000/poll/6290601894c72cbd8787af53"
          children={<div></div>}
          openShareDialogOnClick
          title={props.state.title}
        >
          <TwitterIcon round={true}></TwitterIcon>
        </TwitterShareButton>
        <EmailShareButton
          url="http://localhost:3000/poll/6290601894c72cbd8787af53"
          children={<div></div>}
          openShareDialogOnClick
          subject={props.state.title}
          body="http://localhost:3000/poll/6290601894c72cbd8787af53"
        >
          <EmailIcon round={true}></EmailIcon>
        </EmailShareButton>
      </CardContent>
    </Card>
  );
}
export default SocialMediaShareButtons;
