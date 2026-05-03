import React, { useState } from "react";
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Keyword from "../../components/ui/keyword";
import Accordion from '../../components/ui/Accordion';
import Tip from "../../components/ui/Tip"

function MoneyFlow({ variant = "claims",labels }) {
  const isClaims = variant === "claims";

    const data = isClaims
    ? [
        { percent: 50, color: "#9EC3D4", label: labels.debts },
        { percent: 20, color: "#A3A3A3", label: labels.release },
        { percent: 30, color: "#0F5B8D", label: labels.use }
      ]
    : [
        { percent: 70, color: "#A3A3A3", label: labels.release },
        { percent: 30, color: "#0F5B8D", label: labels.use }
      ];

  const total = 12; 

  return (
    <div style={{
      display: "flex",
      gap: "3rem",
      marginTop: "2rem",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
      
      
      <div style={{
        position: "relative",
        width: "260px",
        height: "340px"
      }}>
        {data.map((item, i) => (
          <div key={i}
           style={{
            position: "absolute",
            top: `${i * 110}px`,          
            left: `${i * 25}px`,
            minWidth: "240px",            
            padding: "1.2rem 1.5rem",     
            borderRadius: "60px",
            background: item.color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
          }}
          >
            <div style={{ fontSize: "1.9rem", fontWeight: 900 }}>
              {item.percent}%
            </div>
            <div style={{ fontSize: "1.9rem", opacity: 0.9 }}>
              {item.label}
            </div>
          </div>
        ))}

       
      </div>

     
      <div style={{ flex: 1 }}>
        <h4 style={{
          color: "#003B71",
          fontWeight: 800,
          marginBottom: "0.5rem"
        }}>
          Example:
        </h4>

        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          If you receive €{total} in your personal account:
        </p>

        {data.map((item, i) => {
          const amount = ((item.percent / 100) * total).toFixed(2);

          return (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "1rem",
              gap: "0.8rem"
            }}>
              <div style={{
                width: "6px",
                height: "55px",
                background: item.color
              }} />

              <p style={{ margin: 0, lineHeight: 1.5 }}>
                <strong>{item.percent}%</strong> or <strong>€{amount}</strong> → {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DailyAccount({ language = 'ET' }) {
  const content={
    ET:{
       title:"ISIKUARVE",
      sub:"Vanglas avatakse Sulle arve oma raha hoidmiseks - seda nimetatakse isikuarveks",
      accContent:[
        "Isikuarve numbri saad oma juhtumikorraldajalt või vanglaametnikult.",
        "Kui Sa vanglas töötad, kantakse Sinu palk (töötasu) isikuarvele.",
        "Isikuarvele võivad raha kanda ka Sinu pereliikmed ja teised isikud väljaspool vanglat.",
        "Kui vaja, siis saad oma arvelt teha ka pangaülekandeid näiteks riigilõivude maksmiseks.",
        "Vanglas saad kasutada ka teenuseid, mille eest tuleb tasuda. Näiteks isikliku pesu pesemine, koopiate tegemine jne.",
        "Vanglas saad osta e-poest süüa, pesemisvahendeid ja muid vajalikke asju teatud koguses.",
        " Selleks saad kasutada raha, mis on Sinu isikuarvel."
        ],
      accountTip:"Lisaks on Sul kohustus maksta elektriseadmete elektri eest, mida kasutad oma kambris",
      accountWarning:"Sularaha ei ole vanglas lubatud.",
      receivingMoneyTitle:"Mis juhtub, kui saad raha?",
      claimsTitle:"Kui sinu vastu ON nõudeid",
      claimsContent:[
        "50% läheb Sinu võlgade eest tasumiseks",
        "20% läheb vabanemisfondi",
        "Ülejäänud raha saad kasutada vanglas olles, näiteks e-poest ostmiseks või teenuste eest maksmiseks"
        ],
      noClaimsTitle:"Kui sinu vastu EI OLE nõudeid",
      noClaimsContent:[
        "70% läheb vabanemisfondi",
        "Ülejäänud raha saad kasutada vanglas olles, näiteks e-poest ostmiseks või teenuste eest maksmiseks"
        ],
      labels: {
        debts: "Võlad",
        release: "Vabanemisfond",
        use: "Sinu kasutus"
      },
      claimsTip:"Kui vabanemisfond saab täis, saad ise otsustada, kas kanda jätkuvalt osa raha edasi vabanemisfondi või kasutada vanglas",
      faqsTitle:"Korduma kippuvad küsimused",
      faqs:[
          {
            Question:"Mis on vabanemisfond ja kuidas saan seda kasutada?",
            Answer:[
              "See on osa Sinu isikuarvele laekuvast rahast, mis hoitakse alles ja antakse Sulle kasutamiseks vabanemisel.",
              "Vabanemisfond (vabanemistoetus) aitab Sul katta esimesi vabanemisjärgseid kulutusi (nt elukoha üürimine vmt).",
              "Vabanemisfondi maksimaalne suurus on kolmekordne Eesti miinimumpalk. ",
              "Kui see summa on Sinu isikuarvele kogunenud, saad sellest ülejäävat raha kasutada võlgade eest tasumiseks, saata pereliikmetele ja ülalpeetavatele või kanda oma pangaarvele väljaspool vanglat.",
              " Raha saad kasutada ka vanglas",
              "Kui vanglast vabaned, saad kaasa vabanemisfondi ja vaba raha jäägi, mis on kogunenud Sinu isikuarvele."
               ]
                
          },
          {
            Question:"Mida peaksin isikuarve kohta veel teadma?",
            Answer:[
              "Sa võid anda oma isikuarve numbri ka oma lähedastele.",
              "Nad saavad Sulle vajadusel raha saata, et saaksid osta vajalikke asju vangla poest.",
              "Kui Sinu pere või muu isik kannab Sulle raha, siis see jagatakse samuti osadeks. Näiteks kui pereliige saadab sulle 12 eurot, siis saad poes kasutada 3,6 eurot",
              "Kui ostad midagi vangla poest, siis mõtle ette. Sul peab jätkuma raha ka kohustuslike asjade jaoks, nagu elekter.",
              "Jälgi ise, et Sul oleks piisavalt raha. Oma isikuarvel olevat rahasummat näed tahvelarvutist."
               ]
          }]
    
    },
    EN:{
      title:" PERSONAL ACCOUNT",
      sub:"A personal account will be opened for you in prison to hold your money - this is called a personal account.",
      accContent:[
        "You can get your personal account number from your case manager or prison officer.",
        "If you work in prison, your salary (wages) will be credited to your personal account",
        "Family members and other individuals outside the prison can also deposit money into your personal account.",
        "If necessary, you can also make bank transfers from your account, for example, to pay state fees.",
        "In prison, you can also use services that require payment. For example, personal laundry, making copies, etc.",
        " In prison, you can buy food, cleaning supplies, and other necessary items from the online store in certain quantities. You can use the money that is in your personal account for this.",
      ],
      labels: {
        debts: "Debts",
        release: "Release fund",
        use: "Your use"
      },
      accountTip:"Additionally, you are required to pay for the electricity of the electrical appliances you use in your cell.",
      accountWarning:"Cash is not allowed in prison.",
      receivingMoneyTitle:"What happens when you receive money?",
      claimsTitle:"If there are claims against you",
      claimsContent:[
        "50% goes towards paying off your debts",
        "20% goes to the release fund",
        "You can use the remaining money while in prison, for example, to make purchases on the online store or for services.",
      ],
      noClaimsTitle:"If there are no claims against you",
      noClaimsContent:[
        "70% goes to the release fund",
        "You can use the remaining money while in prison, for example, to make purchases on the online store, or for services"
      ],
      claimsTip:"When the release fund is full, you can decide whether to continue transferring part of the money to the release fund or use it in prison.",
      faqsTitle:"Frequently asked Questions",
      faqs:[
          {
            Question:"What is a release fund and how can I use it?",
            Answer:[
              "This is part of the money that is credited to your personal account, which is kept and made available to you upon release. ",
              "The release fund (release support) helps you cover initial post-release expenses (e.g., renting a place to live, etc.)",
              "The maximum amount of the release fund is three times the Estonian minimum wage.",
              "Once this amount has accumulated in your personal account, you can use any excess money to pay off debts, send to family members and dependents, or transfer to your bank account outside of prison",
              "You can also use the money while in prison.",
              "When you are released from prison, you will receive the release fund and the remaining balance of free money that has accumulated in your personal account."
            ]
                
          },
          {
            Question:"What else should I know about my personal account?",
            Answer:[
              "You can also provide your personal account number to your loved ones",
              "They can send you money if needed, so you can buy necessary items from the prison shop.",
              "If your family or another person sends you money, it will also be divided into parts. For example, if a family member sends you 12 euros, you will be able to use 3.6 euros in the shop.",
              "When buying something from the prison shop, think ahead. You need to have enough money for mandatory expenses, such as electricity.",
              "Keep track of your funds to ensure you have enough money. You can see the amount in your personal account on the tablet"
               ]
          }]
    }
  }
  const copy= content [language] || content.EN;
  
  return (
    <Section title={copy.title} sub={copy.sub}>
      <ul style={{listStyleType:"disc"}}>{copy.accContent.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
                    </li>
                ))}

      </ul>
      <Tip>
        {copy.accountTip}
      </Tip>
      <Warning>
        {copy.accountWarning}
      </Warning>
          <h3 style={{
                     fontSize: "2rem",
                    fontWeight: 900,
                    color: "#003B71",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    fontStyle: "italic",
                    marginTop:"2rem"
                  }}>{copy.receivingMoneyTitle}
      </h3>
      <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        marginTop: "2rem"
      }}>
        {copy.claimsTitle}
      </h3>

      <MoneyFlow variant="claims" labels={copy.labels} />


      <h3 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#003B71",
        marginTop: "3rem"
      }}>
        {copy.noClaimsTitle}
      </h3>

      <MoneyFlow variant="noClaims" labels={copy.labels} />
       <Tip>{copy.claimsTip}</Tip>

      <h3 style={{
                     fontSize: "2rem",
                    fontWeight: 900,
                    color: "#003B71",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    fontStyle: "italic",
                    marginTop:"2rem"
                  }}>{copy.faqsTitle}
      </h3>
      <div style={{ marginTop: "1.5rem" }}>
                                            {copy.faqs.map((faq, index) => (
                                              <Accordion
                                                key={index}
                                                title={faq.Question}
                                              >
                                                <div style={{ fontSize: "1.5rem", lineHeight: 1.7 }}>
                                          
                                                  {faq.Line && (
                                                    <p style={{ marginBottom: "0.8rem", fontWeight: 600 }}>
                                                      {faq.Line}
                                                    </p>
                                                  )}
                                          
                                                 
                                                  {Array.isArray(faq.Answer) ? (
                                                    <ul style={{ paddingLeft: "1.8rem",listStyleType: "disc" }}>
                                                      {faq.Answer.map((item, i) => (
                                                        <li key={i} style={{ marginBottom: "0.4rem" }}>
                                                          {item}
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  ) : (
                                                    <p>{faq.Answer}</p>
                                                  )}
                                          
                                                </div>
                                              </Accordion>
                                               ))}
                  </div>
    </Section>
  );
}
