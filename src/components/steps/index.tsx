import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        description="Encontre estabelecimentos"
        title="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        description="Ative o cupom com QR Code"
        title="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        description="Garanta vantagens perto de você"
        title="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  );
}
