import { track } from "@vercel/analytics";

export const analytics = {
  aboutView: () => track("About_View"),
  leadershipView: () => track("Leadership_View"),
  operatingModelView: () => track("Operating_Model_View"),
  capabilitiesView: () => track("Capabilities_View"),
  industriesView: () => track("Industries_View"),
  engineeringBaseTab: () => track("Engineering_Base_Tab"),
  intelligenceLayerTab: () => track("Intelligence_Layer_Tab"),
  capabilityRowClick: (capability: string) =>
    track("Capability_Click", { capability }),
  industryRowClick: (industry: string) =>
    track("Industry_Click", { industry }),
  startConversationClick: (location: string) =>
    track("Start_Conversation_Click", { location }),
  emailClick: () => track("Email_Click"),
};
