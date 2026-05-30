const API_BASE = "http://127.0.0.1:5000";

export const createCampaign = async (
  campaignData: any
) => {

  const response = await fetch(
    `${API_BASE}/campaigns`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(campaignData)
    }
  );

  return response.json();
};

export const launchCampaign =
  async (campaignId: string) => {

    const response =
      await fetch(
        `http://127.0.0.1:5000/campaigns/${campaignId}/launch`,
        {
          method: "PATCH"
        }
      );

    return response.json();
};

export const getCampaigns = async () => {

  const response = await fetch(
    "http://127.0.0.1:5000/campaigns"
  );

  return response.json();

};


export const getCampaignById =
async (
  campaignId: string
) => {

  const response =
    await fetch(
      `http://127.0.0.1:5000/campaigns/${campaignId}`
    );

  return response.json();

};