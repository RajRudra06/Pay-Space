import { CardVariant,POSLimit,DailyATMLimit } from "@repo/db_banks/src/generated/prisma";

  type CardConfig = {
    maxRisk: number;
    variant: CardVariant;
    posLimit: POSLimit;
    atmLimit: DailyATMLimit;
  };
  
  const cardConfigs: CardConfig[] = [
    {
      maxRisk: 10,
      variant: CardVariant.Platinum,
      posLimit: POSLimit.POS_400000,
      atmLimit: DailyATMLimit.ATM_100000,
    },
    {
      maxRisk: 20,
      variant: CardVariant.Gold,
      posLimit: POSLimit.POS_250000,
      atmLimit: DailyATMLimit.ATM_60000,
    },
    {
      maxRisk: 30,
      variant: CardVariant.Classic,
      posLimit: POSLimit.POS_60000,
      atmLimit: DailyATMLimit.ATM_30000,
    },
  ];
  
  export function getCardForRisk(riskScore: number) {
    return cardConfigs.find(cfg => riskScore < cfg.maxRisk) ?? {
      variant: CardVariant.Classic,
      posLimit: POSLimit.POS_60000,
      atmLimit: DailyATMLimit.ATM_30000,
    };
  }
  