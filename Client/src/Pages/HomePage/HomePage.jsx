import React from "react";
import Hero from "./Hero";
import Dailystats from "./Dailystats";
import OurNiche from "./OurNiche";
import AppBenefits from "./AppBenefits";
import RiskLevel from "./RiskLevel";
import InvestCrypto from "./InvestCrypto";
import SubscriptionPlan from "./SubscriptionPlan";
import ActionCall from "./ActionCall";
import FinancialQuote from "./FinancialQuote";

const home = () => {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <Hero />
      <Dailystats />
      <div className="">
        <OurNiche />
        <RiskLevel />
      </div>
      <AppBenefits />
      <InvestCrypto />
      <FinancialQuote/>
      <SubscriptionPlan />
      <ActionCall />
    </section>
  );
};

export default home;
