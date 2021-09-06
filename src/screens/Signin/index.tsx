import React, { useContext } from "react";

import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../Hooks/auth";
import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const { user } = useAuth();
  console.log(user);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>Control your {"\n"} finances very simply</Title>
        </TitleWrapper>

        <SignInTitle>Login with {"\n"} one of the accounts below</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Sign in with Google" svg={GoogleSvg} />
          <SignInSocialButton title="Sign in with Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
