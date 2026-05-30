export async function generateAIEmail(
  campaignName: string,
  campaignType: string
) {

  const response =
    await fetch(
      "http://127.0.0.1:5000/ai/generate-email",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          campaignName,
          campaignType,
        }),
      }
    );

  return await response.json();
}