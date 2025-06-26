import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  export const OrderMail = ({
    fullName,
    size,
    phoneNumber,
    email,
    city,
    governorate,
    address,
    postalCode,
    payOnDelivery,
    total,
    img,
  }) => {
    return (
      <Html>
        <Head />
        <Preview>Votre commande - Sawarni</Preview>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Text style={heading}>Merci pour votre commande, {fullName} !</Text>
  
              <Text style={paragraph}>
                Voici les détails de votre commande :
              </Text>
  
              {/* Image du produit */}
              <Img
                alt="T-Shirt"
                className="rounded-[12px] [margin:0_auto]"
                height={250}
                src={img}
                style={imageStyle}
              />
  
              <Text style={paragraph}>
                <strong>Produit :</strong> T-Shirt ({size})
              </Text>
  
              <Text style={paragraph}>
                <strong>Prix :</strong> {total},000 DT
              </Text>
  
              <Text style={paragraph}>
                <strong>Mode de paiement :</strong>{" "}
                {payOnDelivery ? "Paiement à la livraison" : "Paiement en ligne"}
              </Text>
  
              <Text style={paragraph}>
                <strong>Adresse de livraison :</strong>
                <br />
                {address}, {city}, {postalCode}, {governorate}
              </Text>
  
              <Text style={paragraph}>
                <strong>Contact :</strong> {phoneNumber} | {email}
              </Text>
  
              <Text style={paragraph}>
                Vous recevrez un appel sous 48h pour confirmer la commande et
                organiser la livraison.
              </Text>
  
              <Text style={footer}>Merci de faire confiance à Sawarni !</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: "#f9f9f9",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: "20px",
  };
  
  const content = {
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  
  const heading = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333",
    marginBottom: "12px",
  };
  
  const imageStyle = {
    margin: "20px auto",
    borderRadius: "12px",
  };
  
  const footer = {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#555",
    marginTop: "24px",
    textAlign: "center",
  };
  
  export default OrderMail;
  