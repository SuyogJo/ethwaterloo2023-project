import "./App.css";
import { useState, useEffect } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedDapp from "./VcGatedDapp";
import { Center, Card, CardBody, Container, Box, Button, Text, VStack } from "@chakra-ui/react";

function App() {

  const [redemptionPoolAmount, setRedemptionPoolAmount] = useState("Will determine from smart contract through ethers.js");
  const [redeemedAmount, setRedeemedAmount] = useState("Will determine from the merchant's smart contract");
  const [amount, setAmount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // Make an API call to fetch data from the backend
      // Replace the URL with your actual backend endpoint
      fetch("http://worldtimeapi.org/api/timezone/America/Toronto")
        .then((response) => response.json())
        .then((data) => {
          const stringifiedData = JSON.stringify(data);
          setData(data);
          setRedemptionPoolAmount(data.datetime)
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };
    // Fetch data initially
    fetchData();

    // Polling interval in milliseconds
    const pollingInterval = 20000; // 5 seconds
    // Start polling using setInterval
    const intervalId = setInterval(fetchData, pollingInterval);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  

  console.log(data && data.datetime)

  // if you're developing and just want to see the dapp without going through the Polygon ID flow,
  // temporarily set this to "true" to ignore the Polygon ID check and go straight to the dapp page
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(false);

  // This is your currency number you want to display

  return (
    <div className="backdrop">
      {provedAccessBirthday ? (
        <VcGatedDapp />
      ) : (
        <Center className="vc-check-page">
          <Container>
            <Text fontFamily={"sans-serif"} as='b' color="#ffc872" fontSize="5xl">{"Giev Charity"}</Text>
            <Card
              style={{
                border: "2px solid #8A9A5B",
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <VStack spacing={5}>
                  <Text fontSize="xl">Giev Redemption Pool (MATIC)</Text>
                  <Text fontSize="3xl">{redemptionPoolAmount}</Text>
                  <Text fontSize="xl">Redeemed Amount (MATIC)</Text>
                  <Text fontSize="3xl">{redeemedAmount}</Text>
                  <form>
                    <label>
                      Amount:
                      <input type="number" name="name" value={amount} onChange={(event) => setAmount(event.target.value)} max={1000}/>
                    </label>
                  </form>
                </VStack>

                <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  credentialType={"KYCAgeCredential"}
                  issuerOrHowToLink={
                    "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                  }
                  
                  onVerificationResult={() => {
                    fetch('../../server/interact.js', {
                      method: 'POST',
                      body: JSON.stringify({
                        receipientAddress: '0x5cBe2ebDCD0C12B70630De8C80b111f4dfEb369c',
                        amountOfFund: `${amount}`
                      }),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                    })
                       .then((response) => response.json())
                       .then((data) => {
                          console.log(data);
                          // Handle data
                       })
                       .catch((err) => {
                          console.log(err.message);
                       })
                      }
                  }
                />
              </CardBody>
              <a
                href="https://twitter.com/0ceans404"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "0",
                    fontSize: "8px",
                  }}
                >
                </p>
              </a>
            </Card>
          </Container>
        </Center>
      )}
    </div>
  );
}

export default App;