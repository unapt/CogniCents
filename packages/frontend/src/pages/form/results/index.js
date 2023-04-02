import { Card, CardBody, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React from 'react';
import PieChart from '../../../components/PieChart';
import classes from '../../../styles/piechart.module.css';
import styles from '../../../styles/result.module.css'
import Link from "next/link";
import { SideBar } from "../../../components/SideBar";

function piechart() {
  
  const router = useRouter();
  const { q } = router.query;
  if (!router.isReady) {
    return;
  }
  const data1 = JSON.parse(q);
  

  const userData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
      },
    ],
  };
  console.log(userData);
  

  let sum = parseInt(data1.housingExpenses) + parseInt(data1.healthExpenses) + parseInt(data1.entertainmentExpenses) + parseInt(data1.savingsExpenses) + parseInt(data1.miscellaneousExpenses);
  console.log(sum);
  data1.housingExpenses = sum * 0.35;
  data1.healthExpenses = sum * 0.15;
  data1.entertainmentExpenses = sum * 0.1;
  data1.savingsExpenses = sum * 0.2;
  data1.miscellaneousExpenses = sum * 0.2;

  const standardData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
      },
    ],
  };

  console.log(standardData);
  return (
    <SideBar>
    <div id={styles.resultbody}>

      <div id={styles.resulttitle}>This is what your budget looks like now. Let's save some cents!</div>

      <div className={classes.row} id={styles.piecharts}>
        <PieChart chartData={userData} info='Your Expense' />
        <PieChart chartData={standardData} info='Your Optimal Budget' />
      </div>
      <div>
        <div id={styles.carouseltitle}>Here's are some tips to help you save more:</div>
        <div>1. Track spending: Monitor expenses regularly to know where your money is going.</div>
        <div>2. Create a budget: Make a realistic budget that includes all expenses.</div>
        <div>3. Prioritize savings: Set aside a portion of income each month for emergency funds, retirement, and other long-term goals.</div>
        <div>4. Cut unnecessary expenses: Look for ways to cut back on non-essential expenses.</div>
        <div>5. Review budget regularly: Check regularly to ensure spending aligns with financial goals and adjust if necessary.</div>
      </div>
      {/*<div id={styles.carouseltitle}>How you'll get there: INVEST, INVEST, INVEST in...<a href="https://www.verbwire.com/" target="_blank" rel="noopener noreferrer">Verbwire!</a></div>*/}
      <Link href='/home'>
          <Button variant='solid' width="half" height="half" colorScheme='green'>
              Back to Home
          </Button>
      </Link >
    </div>
    </SideBar>
  );
}

export default piechart;