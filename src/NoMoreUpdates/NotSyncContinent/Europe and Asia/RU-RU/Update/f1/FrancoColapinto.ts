export interface ApiResponse {
  status: string;
  loopOutput: string;
}

export async function FranquitoAPICall(): Promise<string> {
  const url =
    "https://magicloops.dev/api/loop/run/a15827c7-e0a3-46a4-8d39-257a2f516f78";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: "" }),
    });

    if (!response.ok) {
      return response.statusText + " " + response.status;
    }

    const responseJson: ApiResponse = await response.json();
    return responseJson.loopOutput;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "Un error desconocido ocurrió";
  }
}

export async function FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI(): Promise<any> {
  try {
    const response = await FranquitoAPICall();
    return response;
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`;
  }
}

export async function FrancoColapinto() {
  const result =
    await FrancoColapintoSubExtensionForAPICallDoNotUserPleaseItsjustANAPI();
  console.log(result);
}
