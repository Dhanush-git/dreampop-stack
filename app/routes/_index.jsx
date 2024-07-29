import { Box, Button, Page } from "@shopify/polaris";
import { Layout } from "../root";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Page title="Welcome to Remix">
      <Box paddingBlock="200">
        <Button external url="https://remix.run/start/quickstart" variant="primary">5m Quick Start</Button>
      </Box>
      <Box paddingBlock="200">
        <Button external url="https://remix.run/start/tutorial" variant="primary">30m Tutorial</Button>
      </Box>
      <Box paddingBlock="200">
        <Button external url="https://remix.run/docs" variant="primary">Remix Docs</Button>
      </Box>
    </Page>
  );
}
