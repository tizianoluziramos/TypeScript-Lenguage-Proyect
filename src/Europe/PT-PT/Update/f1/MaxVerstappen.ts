export async function MaxVerstappen() {
    const url = 'https://magicloops.dev/api/loop/run/8e5e3bed-9c88-47a8-8d37-b849a46ead83';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"driver": "Max Verstappen"}),
      });
  
      if (!response.ok) {
        console.error(response.statusText);
        return;
      }
  
      const responseJson = await response.json();
      console.log(responseJson.loopOutput);
    } catch (error) {
      console.error(error);
    }
  }

  export async function MaxVerstappenReturnThenCode(): Promise<string> {
    const url = 'https://magicloops.dev/api/loop/run/8e5e3bed-9c88-47a8-8d37-b849a46ead83';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"driver": "Max Verstappen"}),
      });

      if (!response.ok) {
        throw new Error(response.statusText); // Lanzamos un error si no es ok
      }

      const responseJson = await response.json();
      return responseJson.loopOutput; // Retornamos la salida de la API
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`; // Retornamos el error como mensaje
    }
}