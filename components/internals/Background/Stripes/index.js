import React from "react";
import styled, { css } from "styled-components";

const RootView = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: skewY(-12deg);
  transform-origin: 0;
  background-color: ${props => props.theme.colors.secondary[1]};
  background: linear-gradient(
    150deg,
    ${props => props.theme.colors.secondary[2]} 15%,
    ${props => props.theme.colors.secondary[1]} 70%,
    ${props => props.theme.colors.secondary[0]} 94%
  );
`;

const Stripe = styled.span`
  position: absolute;
  height: 190px;
  box-sizing: border-box;
  opacity: 0.5;
`;

const Stripe1 = Stripe.extend`
  top: 0;
  left: -16.66667%;
  width: 33.33333%;
  background-color: ${props => props.theme.colors.secondary[2]};
`;

const Stripe2 = Stripe.extend`
  top: 0;
  left: 16.66667%;
  bottom: auto;
  right: auto;
  width: 33.33333%;
  background-color: ${props => props.theme.colors.secondary[1]};
`;

const Stripe3 = Stripe.extend`
  left: 49.99999%;
  bottom: auto;
  right: auto;
  width: 33.33333%;
  background-color: ${props => props.theme.colors.secondary[2]};
`;

const Stripe4 = Stripe.extend`
  top: 380px;
  right: -16.66667%;
  width: 33.33333%;
  background-color: ${props => props.theme.colors.secondary[0]};
`;

const Stripe5 = Stripe.extend`
  bottom: 0;
  width: 33.33333%;
  background-color: ${props => props.theme.colors.secondary[1]};
`;

const Stripes = () =>
  <RootView>
    <Stripe1 />
    <Stripe2 />
    <Stripe3 />
    <Stripe4 />
    <Stripe5 />
  </RootView>;

export default Stripes;
