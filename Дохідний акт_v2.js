function onCardInitialize() {
  debugger;
  myOnChangeTypeSigning(false);
  //   setPropTypeSigning();

  //setProp(false);
}

function setPropTypeSigning() {
  if (EdocsApi.getAttributeValue("edocsCreatedByExtSys").value == "vchasno") {
    setControlDisabled("TypeSigning", true);
    if (EdocsApi.getAttributeValue("TypeSigning").value != "Електронне підписання Вчасно")
      EdocsApi.setAttributeValue({
        code: "TypeSigning",
        value: "Електронне підписання Вчасно",
        text: null,
      });
  }
}

function onChangeBasicContract() {
  var BasicContract = EdocsApi.getAttributeValue("BasicContract").value;
  if (BasicContract) {
    var item = EdocsApi.getDictionaryItemData("Договори", BasicContract);
    if (item && item.attributes) {
      EdocsApi.setAttributeValue({
        code: "NumberDateBasicAgreement",
        value: item.attributes.find((x) => x.Contract_Number)?.Contract_Number,
        text: null,
      });
      var dateStr = item.attributes.find((x) => x.Contract_Date)?.Contract_Date;
      if (dateStr && dateStr != "") {
        EdocsApi.setAttributeValue({
          code: "DateBasicAgreement",
          value: new Date(dateStr).toISOString(),
          text: null,
        });
        setDateSTR("DateBasicAgreement", "DateBasicAgreementText");
      }
    }
  } else {
    EdocsApi.setAttributeValue({
      code: "NumberDateBasicAgreement",
      value: null,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "DateBasicAgreement",
      value: null,
      text: null,
    });
  }
}

function setAccountantApproval() {
  var AccountantApproval = EdocsApi.getAttributeValue("DocumentKind").text;
  if (AccountantApproval != EdocsApi.getAttributeValue("AccountantApproval").value)
    EdocsApi.setAttributeValue({
      code: "AccountantApproval",
      value: AccountantApproval,
      text: null,
    });
}

function onChangeDocumentKind() {
  //   setProp(true);
  var DocumentKind = EdocsApi.getAttributeValue("DocumentKind").text;
  if (DocumentKind) {
    setAccountantApproval();
    //EdocsApi.setAttributeValue({code: 'AccountantApproval', value: (EdocsApi.findElementByProperty('code', 'AccountantApproval', EdocsApi.getDictionaryItemData('AccountantApproval', DocumentKindNew ).attributes).value), text: null});
  } else {
    EdocsApi.setAttributeValue({
      code: "AccountantApproval",
      value: null,
      text: null,
    });
  }
}

/*function setProp(flag){
debugger;
    var DocumentKind = EdocsApi.getAttributeValue('DocumentKind').value;
    if(DocumentKind){
        if(flag) ReturnInitialState();
        switch (DocumentKind) {
           

           //case 'АКТ (надання послуг компаніям КШЕ)':
case '1083':
                setControlHide('edocsIncomeDocumentNumber', false);
                setControlHide('edocsIncomeDocumentDate', false);
                setControlHide('DocumentType', false);
                setControlHide('DocumentKind', false);
                //setControlHide('DocumentKindNew', false);
                //setControlHide('NameForSubject', false);
                //setControlRequired('NameForSubject', true);
                setControlHide('Organization', false);
                setControlHide('OrgName', false);
                setControlHide('OrgEDRPOU', false);  
                setControlHide('OrgIPN', false);            
 
                setControlHide('Counterparty', false);
                //setControlHide('CounterpartyFullName', false);
               setControlHide('CounterpartyEmailAuthorisedPersons', false);
               // setControlHide('ContractorId', false);
                setControlHide('CounterpartyINN', false);
                setControlHide('FinancialManager', false);
                setControlHide('ProjectManager', false);
                // setControlHide('TypeSigning', false);
              //  if(EdocsApi.getAttributeValue('edocsCreatedByExtSys').value == 'vchasno')
              //  setControlHide('Responsible', false);       
                   setControlHide('TypeSigning', false);
                   setControlHide('Project', false); 

                setControlRequired('DocumentType', true);
                setControlRequired('DocumentKind', true);
               // setControlRequired('NameForSubject', true);
                setControlRequired('Organization', true);
                setControlRequired('Counterparty', true);
                 //setControlRequired('Project', true);
              
               setControlRequired('TypeSigning', true);
              //  setControlRequired('Responsible', false);
              //  setControlRequired('CounterpartyEmailAuthorisedPersons', false);
            break;

           // case 'АКТ (викладачі, ФОП+ФОП ставка)':
 case '1060':
                setControlHide('edocsIncomeDocumentNumber', false);
                setControlHide('edocsIncomeDocumentDate', false);
                //setControlHide('DocumentType', false);
                setControlHide('DocumentKind', false);
                //setControlHide('DocumentKindNew', false);
                //setControlHide('NameForSubject', false);
                   setControlHide('Project', false);

                if(flag) {
                setPaymentGross();
             //  onChangeSumNotPDV();
               onChangePaymentGross();
}
              
            break;

            default:
                break;
        }
    }
    else{
       // ReturnInitialState();
    }
}
//function ReturnInitialState(){
    //setControlHide('RegNumber', true);
    //setControlHide('RegDate', true);
    //setControlHide('DocumentType', true);
    //setControlHide('DocumentKind', true);
    //setControlHide('DocumentKindNew', true);
    //setControlHide('NameForSubject', true);
    //setControlHide('Organization', true);
   // setControlHide('OrgName', true);
   // setControlHide('OrgEDRPOU', true);
    setControlHide('OrgIPN', true);
    setControlHide('OrgFullName', true);
    setControlHide('Mark3', true);
    setControlHide('OrgContractManagerEmail', true);
    setControlHide('OrgLegalAddress', true);
    setControlHide('OrgIBAN', true);
    setControlHide('OrgBank', true);
    setControlHide('OrgMFO', true);
    setControlHide('ORGNameSignatory', true);
    setControlHide('OrgPositionSignatory', true);
    setControlHide('EmailAuthorisedPersons', true);
    //setControlHide('Counterparty', true);
    setControlHide('CounterpartyFullName', true);
    //setControlHide('CounterpartyEDRPOU', true);
    setControlHide('CounterpartyINN', true);
    setControlHide('CounterpartyAddress', true);
    setControlHide('StateRegDate', true);
    setControlHide('StateRegNumber', true);
    setControlHide('CounterpartyBank', true);
    setControlHide('CounterpartyAccount', true);
    setControlHide('CounterpartyMFO', true);
    setControlHide('CounterpartyPhone', true);
    setControlHide('CounterpartyEmailAuthorisedPersons', false);
    setControlHide('Project', true);
    setControlHide('BasicContract', true);
    //setControlHide('ServicesProject', true);
    setControlHide('PeriodTo', true);
    setControlHide('PeriodFrom', true); 
   setControlHide(' Period', true); 
    setControlHide('TypeSigning', true);
    setControlHide('PaymentGross', true);
    setControlHide('SumNotPDV', true);
    setControlHide('SumPDV2', true);
    setControlHide('SumPDV', true);
   // setControlHide('Services', true);
    setControlHide('Nomenclature', true);
    setControlHide('CostItem', true);
    setControlHide('FinancialManager', true);
    setControlHide('ProjectManager', true);
    setControlHide('ContractorId', true);
   // setControlHide('NumberClasses', true);
   // setControlHide('CostLesson', true);
    //setControlHide('PaymentServices', true);
    setControlHide('Employee', true);
    setControlHide('RatePayments', true);   
   setControlHide('Contacts', true);   
  setControlHide('BankDetails', true);    
  setControlHide('BankDetails2', true);   
 //setControlHide('Responsible', true);
  setControlHide('PaymentGross', true); 


}*/

function setControlHide(CODE, state) {
  var control = EdocsApi.getControlProperties(CODE);
  if (control) {
    control.hidden = state;
    if (state) {
      var value = EdocsApi.getAttributeValue(CODE).value;
      if (value == "true" || value == "false") {
        if (value == "true");
        EdocsApi.setAttributeValue({ code: CODE, value: "false" });
      } else {
        EdocsApi.setAttributeValue({ code: CODE, value: null, text: null });
      }
      control.required = false;
    }
    EdocsApi.setControlProperties(control);
  }
}

function setControlRequired(CODE, state) {
  var control = EdocsApi.getControlProperties(CODE);
  if (control) {
    control.required = state;
    EdocsApi.setControlProperties(control);
  }
}
function setControlDisabled(CODE, state) {
  var control = EdocsApi.getControlProperties(CODE);
  if (control) {
    control.disabled = state;
    EdocsApi.setControlProperties(control);
  }
}

function onChangeProject() {
  var Project = EdocsApi.getAttributeValue("Project").value;
  if (Project) {
    var item = EdocsApi.getDictionaryItemData("Проєкти 1С", Project);
    if (item) {
      if (item.attributes[1].FM == "" || !item.attributes[1].FM) {
        // EdocsApi.setAttributeValue({code: 'FinancialManager', value: '242644', text: null});
        //throw 'Відсутній фінінсовий менеджер';
      } else {
        var FM = EdocsApi.getEmployeeDataByPersonExtID(item.attributes[1].FM);
        if (FM)
          EdocsApi.setAttributeValue({
            code: "FinancialManager",
            value: FM.employeeId,
            text: null,
          });
      }

      if (item.attributes[2].PM == "" || !item.attributes[2].PM) {
        //EdocsApi.setAttributeValue({code: 'ProjectManager', value: '242644', text: null});
        //throw 'Відсутній проєктний менеджер';
      } else {
        var PM = EdocsApi.getEmployeeDataByPersonExtID(item.attributes[2].PM);
        if (PM)
          EdocsApi.setAttributeValue({
            code: "ProjectManager",
            value: PM.employeeId,
            text: null,
          });
      }
      if (item.attributes[3].fullname == "" || !item.attributes[3].fullname) {
        //EdocsApi.setAttributeValue({code: 'ProjectManager', value: '242644', text: null});
        //throw 'Відсутній проєктний менеджер';
      } else {
        EdocsApi.setAttributeValue({
          code: "ServicesProject",
          value: item.attributes[3].fullname,
          text: null,
        });
      }
    }
  } else {
    EdocsApi.setAttributeValue({
      code: "FinancialManager",
      value: null,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "ProjectManager",
      value: null,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "ServicesProject",
      value: null,
      text: null,
    });
  }
}

function onChangeContractorId() {
  var ContractorId = EdocsApi.getAttributeValue("ContractorId").text;
  if (ContractorId) {
    var edocsGETCONTRACTOR = EdocsApi.runExternalFunction("1C", "edocsGETCONTRACTOR?format=json&CONTRACTORID=" + ContractorId.split("|")[0] + "&CONTRACTORTYPE=" + ContractorId.split("|")[1] + "&MAXRESULTCOUNT=200", null, "get");
    if (edocsGETCONTRACTOR != null || edocsGETCONTRACTOR.data != null) {
      EdocsApi.setAttributeValue({
        code: "StateRegDate",
        value: edocsGETCONTRACTOR.data.StateRegDate,
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: "StateRegNumber",
        value: edocsGETCONTRACTOR.data.StateRegNumber,
        text: null,
      });
      //EdocsApi.setAttributeValue({code: 'TaxRate', value: edocsGETCONTRACTOR.data.TaxRate, text: null});
      //EdocsApi.setAttributeValue({code: 'PayerPDV', value: (edocsGETCONTRACTOR.data.PayerPDV == 'true'?'Так':'Ні'), text: null});
      //EdocsApi.setAttributeValue({code: 'Mark', value: edocsGETCONTRACTOR.data.Mark, text: null});
      //EdocsApi.setAttributeValue({code: 'Passport', value: edocsGETCONTRACTOR.data.Passport, text: null});
      if (edocsGETCONTRACTOR.data.authorisedPersons && edocsGETCONTRACTOR.data.authorisedPersons.length > 0) {
        EdocsApi.setAttributeValue({
          code: "fullNane",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].fullNane,
          text: null,
        });
        //EdocsApi.setAttributeValue({code: 'nameGenitive', value: edocsGETCONTRACTOR.data.authorisedPersons[0].nameGenitive, text: null});
        //EdocsApi.setAttributeValue({code: 'positionGenitive', value: edocsGETCONTRACTOR.data.authorisedPersons[0].positionGenitive, text: null});
        EdocsApi.setAttributeValue({
          code: "position",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].position,
          text: null,
        });
        //EdocsApi.setAttributeValue({code: 'actingUnderThe', value: edocsGETCONTRACTOR.data.authorisedPersons[0].actingUnderThe, text: null});
        //EdocsApi.setAttributeValue({code: 'CounterpartyAuthorisedPersonsFirstName', value: edocsGETCONTRACTOR.data.authorisedPersons[0].FirstName, text: null});
        //EdocsApi.setAttributeValue({code: 'CounterpartyAuthorisedPersonsLastName', value: edocsGETCONTRACTOR.data.authorisedPersons[0].LastName, text: null});
        //EdocsApi.setAttributeValue({code: 'CounterpartyEmailAuthorisedPersons', value: edocsGETCONTRACTOR.data.authorisedPersons[0].Email, text: null});
      }
    }
  }
}

function onChangeOrganizationID() {
  var OrganizationID = EdocsApi.getAttributeValue("OrganizationID").text;
  if (OrganizationID) {
    var edocsGETCONTRACTOR = EdocsApi.runExternalFunction("1C", "edocsGETCONTRACTOR?format=json&CONTRACTORID=" + OrganizationID.split("|")[0] + "&CONTRACTORTYPE=" + OrganizationID.split("|")[1] + "&MAXRESULTCOUNT=200", null, "get");
    if (edocsGETCONTRACTOR != null || edocsGETCONTRACTOR.data != null) {
      EdocsApi.setAttributeValue({
        code: "Mark3",
        value: edocsGETCONTRACTOR.data.Mark,
        text: null,
      });
      if (edocsGETCONTRACTOR.data.authorisedPersons && edocsGETCONTRACTOR.data.authorisedPersons.length > 0) {
        EdocsApi.setAttributeValue({
          code: "ORGNameSignatory",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].fullNane,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgNameSignatory3",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].nameGenitive,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgPositionSignatory3",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].positionGenitive,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgPositionSignatory",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].position,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgBasis",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].actingUnderThe,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgAuthorisedPersonsFirstName",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].FirstName,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "OrgAuthorisedPersonsLastName",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].LastName,
          text: null,
        });
        EdocsApi.setAttributeValue({
          code: "EmailAuthorisedPersons",
          value: edocsGETCONTRACTOR.data.authorisedPersons[0].Email,
          text: null,
        });
      }
    }
  }
}

function onChangePercentagePDV() {
  if (EdocsApi.getAttributeValue("PercentagePDV").value && EdocsApi.getAttributeValue("PaymentGross").value) setSumPDVControl();
  setSumHundreds();
}

function setSumPDVControl() {
  var PaymentGross = Number(EdocsApi.getAttributeValue("PaymentGross").value);
  var PercentagePDV = Number(EdocsApi.getAttributeValue("PercentagePDV").value);
  if (PercentagePDV == 0) {
    EdocsApi.setAttributeValue({
      code: "SumPDV",
      value: PaymentGross,
      text: null,
    });
    EdocsApi.setAttributeValue({ code: "SumPDV2", value: 0.0, text: null });
    EdocsApi.setAttributeValue({
      code: "SumNotPDV",
      value: PaymentGross,
      text: null,
    });
    setPriceServices();
  } else if (PercentagePDV == 20) {
    EdocsApi.setAttributeValue({
      code: "SumPDV",
      value: PaymentGross,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "SumPDV2",
      value: (PaymentGross / 6).toFixed(2),
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "SumNotPDV",
      value: PaymentGross - PaymentGross / 6,
      text: null,
    });
    setPriceServices();
  }
  onChangeSumNotPDV();
  onChangeSumPDV();
  onChangeSumPDV2();
}

function onChangeQuantityService() {
  setPriceServices();
}

function setPriceServices() {
  if (EdocsApi.getAttributeValue("QuantityService").value && EdocsApi.getAttributeValue("SumNotPDV").value) {
    EdocsApi.setAttributeValue({
      code: "PriceServices",
      value: (Number(EdocsApi.getAttributeValue("SumNotPDV").value) / Number(EdocsApi.getAttributeValue("QuantityService").value)).toFixed(2),
      text: null,
    });
  }
}

function onChangePaymentGross() {
  if (EdocsApi.getAttributeValue("PercentagePDV").value && EdocsApi.getAttributeValue("PaymentGross").value) setSumPDVControl();
  setNumberToWords("PaymentGross", "PaymentGrossText");
  //   if(EdocsApi.getAttributeValue('PaymentGross').value !=  EdocsApi.getAttributeValue('SumNotPDV').value)
  //    EdocsApi.setAttributeValue({code: 'SumNotPDV', value: EdocsApi.getAttributeValue('PaymentGross').value, text: null});
  //onChangeSumNotPDV();
}
function setNumberToWords(NumberCode, TextCode) {
  if (CurrentDocument.isDraft) {
    var value = EdocsApi.getAttributeValue(NumberCode).value;
    if (value) {
      EdocsApi.setAttributeValue({
        code: TextCode,
        value: EdocsApi.numberToCurrency(Number(value).toFixed(2), "uk", "UAH"),
        text: null,
      });
      EdocsApi.setAttributeValue({
        code: NumberCode,
        value: Number(value).toFixed(2),
        text: null,
      });
    } else {
      EdocsApi.setAttributeValue({ code: TextCode, value: null, text: null });
    }
  }
}

function onChangeSumNotPDV() {
  setNumberToWords("SumNotPDV", "SumNotPDVText");
  setSumHundreds();
}
function onChangeSumPDV2() {
  setNumberToWords("SumPDV2", "SumPDV2Text");
  setSumHundreds();
}

function onChangeSumPDV() {
  setNumberToWords("SumPDV", "SumPDVText");
  setSumHundreds();
}

function onChangePriceServices() {
  setSumHundreds();
}

function setSumHundreds() {
  EdocsApi.setAttributeValue({
    code: "SumNotPDVHundreds",
    value: validationOfSumSigns(EdocsApi.getAttributeValue("SumNotPDV").value),
  });
  EdocsApi.setAttributeValue({
    code: "SumPDV2Hundreds",
    value: validationOfSumSigns(EdocsApi.getAttributeValue("SumPDV2").value),
  });
  EdocsApi.setAttributeValue({
    code: "SumPDVHundreds",
    value: validationOfSumSigns(EdocsApi.getAttributeValue("SumPDV").value),
  });
  EdocsApi.setAttributeValue({
    code: "PriceServicesHundreds",
    value: validationOfSumSigns(EdocsApi.getAttributeValue("PriceServices").value),
  });
}

function validationOfSumSigns(sum) {
  if (sum) {
    if (sum.search(/([.,][1234567890][1234567890])$/) != "-1") {
      return sum;
    } else if (sum.search(/([.,][1234567890])$/) != "-1") {
      return `${sum}0`;
    } else {
      return `${sum}.00`;
    }
  }
  return sum;
}

/*function setPaymentServices(){
    var CostLesson = EdocsApi.getAttributeValue('CostLesson').value;
    var NumberClasses = EdocsApi.getAttributeValue('NumberClasses').value;

    EdocsApi.setAttributeValue({code: 'PaymentServices', value: (Number(CostLesson)*Number(NumberClasses)), text: null});
}

function onChangeCostLesson(){
    setPaymentServices();
    if(EdocsApi.getAttributeValue('DocumentKind').text == 'АКТ (викладачі, ФОП+ФОП ставка)')
        setPaymentGross();
}

function onChangeNumberClasses(){
    setPaymentServices();
    if(EdocsApi.getAttributeValue('DocumentKind').text == 'АКТ (викладачі, ФОП+ФОП ставка)')
        setPaymentGross();
}*/

/*function onChangeRatePayments(){
    if(EdocsApi.getAttributeValue('DocumentKind').text == 'АКТ (викладачі, ФОП+ФОП ставка)')
        setPaymentGross();
}

function setPaymentGross(){
var val = ((Number(EdocsApi.getAttributeValue('CostLesson').value) * Number(EdocsApi.getAttributeValue('NumberClasses').value) - Number(EdocsApi.getAttributeValue('RatePayments').value) + 1474) / 0.95);
if(val != EdocsApi.getAttributeValue('PaymentGross').value)
    EdocsApi.setAttributeValue({code: 'PaymentGross', value:  val, text: null});
onChangePaymentGross();
}*/

function sendToCreate1Cdoc() {
  var methodData = {
    userId: CurrentDocument.initiatorId,
    documentUrl: CurrentDocument.url,
    templateDoc: "Contract",
    caseId: CurrentDocument.id,
    docId: CurrentDocument.id,
    attributes: [
      EdocsApi.getAttributeValue("Counterparty"),
      EdocsApi.getAttributeValue("CounterpartyFullName"),
      EdocsApi.getAttributeValue("CounterpartyEDRPOU"),
      EdocsApi.getAttributeValue("ContractorId"),

      EdocsApi.getAttributeValue("OrgName"),
      EdocsApi.getAttributeValue("OrgFullName"),
      EdocsApi.getAttributeValue("OrgEDRPOU"),
      EdocsApi.getAttributeValue("OrganizationID"),
      EdocsApi.getAttributeValue("PayerPDV"),
      EdocsApi.getAttributeValue("TaxRate"),
      EdocsApi.getAttributeValue("ORGNameSignatory"),
      EdocsApi.getAttributeValue("OrgPositionSignatory"),
      // EdocsApi.getAttributeValue('CertificateNumber'),

      EdocsApi.getAttributeValue("BasicContract"),
      EdocsApi.getAttributeValue("PeriodTo"),
      EdocsApi.getAttributeValue("PeriodFrom"),
      EdocsApi.getAttributeValue("Period"),
      EdocsApi.getAttributeValue("Project"),
      EdocsApi.getAttributeValue("PaymentGross"),
      EdocsApi.getAttributeValue("SumNotPDV"),
      EdocsApi.getAttributeValue("PercentagePDV"),
      EdocsApi.getAttributeValue("SumPDV2"),
      EdocsApi.getAttributeValue("SumPDV"),
      EdocsApi.getAttributeValue("SumWithPDV"),
      EdocsApi.getAttributeValue("Services"),

      EdocsApi.getAttributeValue("Nomenclature"),
      EdocsApi.getAttributeValue("CostItem"),
      EdocsApi.getAttributeValue("edocsIncomeDocumentNumber"),

      {
        code: "edocsIncomeDocumentDate",
        value: EdocsApi.getAttributeValue("edocsIncomeDocumentDate").value ? moment(new Date(EdocsApi.getAttributeValue("edocsIncomeDocumentDate").value)).format("YYYY-MM-DD") : null,
      },

      // EdocsApi.getAttributeValue('NumberClasses'),
      // EdocsApi.getAttributeValue('CostLesson'),
      EdocsApi.getAttributeValue("DocumentType"),
      EdocsApi.getAttributeValue("DocumentKind"),
      EdocsApi.getAttributeValue("DocumentID1C"),
      EdocsApi.getAttributeValue("svpdv"),
      EdocsApi.getAttributeValue("Period"),
      EdocsApi.getAttributeValue("ServiceUnit"),
      EdocsApi.getAttributeValue("QuantityService"),
      EdocsApi.getAttributeValue("PriceServices"),
      EdocsApi.getAttributeValue("AmountIncludesPDV"),
    ],
  };

  var response = EdocsApi.extSysCreateDoc((externalSystemCode = "1C"), (externalSystemMethod = "edocsCreateDoc"), (methodData = methodData), (methodFiles = "fixedFiles"), (methodSignFiles = true));

  if (response.data) {
    if (response.data.docId) {
      EdocsApi.setAttributeValue({
        code: "DocumentID1C",
        value: response.data.docId,
        text: null,
      });
      EdocsApi.message("Запис успішно створений. Ідентифікатор:" + response.data.docId);
    } else if (response.data.error) {
      if (response.data.error.validationErrors && response.data.error.validationErrors.length > 0) {
        var errorMessage = "";
        for (var i = 0; i < response.data.error.validationErrors.length; i++) {
          errorMessage += response.data.error.validationErrors[i].message + "; ";
        }
        throw response.data.error.details + "  -  " + errorMessage;
      }
    } else {
      throw "Не отримано відповіді від зовнішньої системи";
    }
  } else {
    throw "Не отримано відповіді від  зовнішньої системи";
  }
}

function onBeforeCardSave() {
  if (CurrentDocument.isDraft) {
    setProjectManager();
    setSTRDates();
    //setNameForSubject();
  }
}

function setSTRDates() {
  //setDateSTR('edocsIncomeDocumentDate', 'RegDateText');
  setDateSTR("PeriodFrom", "PeriodFromText");
  setDateSTR("PeriodTo", "PeriodToText");
  if (EdocsApi.getAttributeValue("edocsIncomeDocumentDate").value) {
    EdocsApi.setAttributeValue({
      code: "RegDateText",
      value: new Date(EdocsApi.getAttributeValue("edocsIncomeDocumentDate").value).toLocaleDateString("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      text: null,
    });
  } else {
    EdocsApi.setAttributeValue({
      code: "RegDateText",
      value: null,
      text: null,
    });
  }
}

function setDateSTR(DateCODE, TXTcode) {
  var Date = EdocsApi.getAttributeValue(DateCODE).value;
  var txt = null;
  if (Date) txt = moment(Date).format("DD.MM.YYYY");
  if (txt != EdocsApi.getAttributeValue(TXTcode).value) EdocsApi.setAttributeValue({ code: TXTcode, value: txt, text: null });
}

function myOnChangeTypeSigning(flag) {
  var TypeSigning = EdocsApi.getAttributeValue("TypeSigning").value;
  if (TypeSigning == "Електронне підписання Вчасно" || TypeSigning == "Електронне підписання е-sign") {
    setControlRequired("CounterpartyEmailAuthorisedPersons", true);
    setControlRequired("EmailAuthorisedPersons", true);
    if (TypeSigning == "Електронне підписання Вчасно" && flag) EdocsApi.message("На підписання контрагенту буде відправлено лише контент першої вкладки документа");
  } else {
    setControlRequired("CounterpartyEmailAuthorisedPersons", false);
    setControlRequired("EmailAuthorisedPersons", false);
    //  setControlRequired('Counterparty2EmailAuthorisedPersons', false);
  }
}

function onChangeTypeSigning() {
  myOnChangeTypeSigning(true);
}

function onChangeCounterpartyEDRPOU() {
  if (!EdocsApi.getAttributeValue("CounterpartyEDRPOU").value)
    EdocsApi.setAttributeValue({
      code: "BasicContract",
      value: null,
      text: null,
    });
}

function onSearchBasicContract(searchRequest) {
  if (!EdocsApi.getAttributeValue("OrgEDRPOU").value) throw "Спочатку оберіть домашню організацію";
  if (!EdocsApi.getAttributeValue("CounterpartyEDRPOU").value) throw "Спочатку оберіть контрагента";

  searchRequest.response = EdocsApi.getDictionaryData("Договори", "", [
    {
      attributeCode: "OrgEDRPOU",
      value: EdocsApi.getAttributeValue("OrgEDRPOU").value,
    },
    {
      attributeCode: "CounterpartyEDRPOU",
      value: EdocsApi.getAttributeValue("CounterpartyEDRPOU").value,
    },
  ]);
}

function setProjectManager() {
  if (EdocsApi.getAttributeValue("Manager")?.value == EdocsApi.getAttributeValue("ProjectManager")?.value) {
    if (Number(EdocsApi.getAttributeValue("ProjectManagerManager").value) != 1)
      EdocsApi.setAttributeValue({
        code: "ProjectManagerManager",
        value: 1,
        text: null,
      });
  } else {
    if (Number(EdocsApi.getAttributeValue("ProjectManagerManager").value) != 0 || !EdocsApi.getAttributeValue("ProjectManagerManager").value)
      EdocsApi.setAttributeValue({
        code: "ProjectManagerManager",
        value: 0,
        text: null,
      });
  }
}

function onTaskCommentedSendOutDoc(caseTaskComment) {
  //debugger;
  var orgCode = EdocsApi.getAttributeValue("OrgEDRPOU").value;
  var orgShortName = EdocsApi.getAttributeValue("OrgName").value;
  if (!orgCode || !orgShortName) {
    return;
  }
  var isCaceling = caseTaskComment.comment && caseTaskComment.comment.toLowerCase().startsWith("#cancel#");
  if (isCaceling) {
    caseTaskComment.comment = caseTaskComment.comment.slice(8);
  }
  var methodData = {
    extSysDocId: CurrentDocument.id,
    extSysDocVersion: CurrentDocument.version,
    eventType: isCaceling ? "CancelProcessing" : "CommentAdded",
    comment: caseTaskComment.comment,
    partyCode: orgCode,
    userTitle: CurrentUser.name,
    partyName: orgShortName,
    occuredAt: new Date(),
  };
  caseTaskComment.externalAPIExecutingParams = {
    externalSystemCode: "ESIGN",
    externalSystemMethod: "integration/processEvent",
    data: methodData,
    executeAsync: true,
  };
}

//выбор ЕДРПОУ юр.особы, запись в скрытое поле "разрез" Director
function onChangeOrgEDRPOU() {
  // debugger;
  var orgEDRPOU = EdocsApi.getAttributeValue("OrgEDRPOU");
  if (orgEDRPOU.value) {
    EdocsApi.setAttributeValue({ code: "Accountant", value: orgEDRPOU.value });
  } else {
    EdocsApi.setAttributeValue({ code: "Accountant", value: null });
    EdocsApi.setAttributeValue({
      code: "BasicContract",
      value: null,
      text: null,
    });
  }
}

//выбор ЕДРПОУ юр.особы, запись в скрытое поле "разрез" Director
function onChangeCounterpartyEDRPOU() {
  // debugger;

  var orgEDRPOU = EdocsApi.getAttributeValue("CounterpartyEDRPOU");
  if (orgEDRPOU.value) {
    EdocsApi.setAttributeValue({ code: "Accountant2", value: orgEDRPOU.value });
  } else {
    EdocsApi.setAttributeValue({ code: "Accountant2", value: null });
  }
}

/*function onChangeSumNotPDV(){
    var DocumentKind = EdocsApi.getAttributeValue('DocumentKind').text;
    if (DocumentKind == 'АКТ (викладачі, ФОП+ФОП ставка)' || DocumentKind == 'АКТ (проєкти, ФОП, без ПДВ)'){
    //if(EdocsApi.getAttributeValue('DocumentKind').text== 'АКТ (викладачі, ФОП+ФОП ставка)'){
        EdocsApi.setAttributeValue({code: 'SumPDV', value: EdocsApi.getAttributeValue('SumNotPDV').value, text: null});
        EdocsApi.setAttributeValue({code: 'PaymentGross', value:  Number(EdocsApi.getAttributeValue('SumPDV').value), text: null});
        //onChangePaymentGross();
    }
}*/

function setDataForESIGN() {
  var regDate = EdocsApi.getAttributeValue("edocsIncomeDocumentDate").value;
  var regNumber = EdocsApi.getAttributeValue("edocsIncomeDocumentNumber").value;
  var sendByService = EdocsApi.getAttributeValue("TypeSigning").value == "Електронне підписання Вчасно" ? "vchasno" : "esign";
  // var ConterpatytaskType = ((EdocsApi.getAttributeValue('DocumentKind').text== 'АКТ (надання послуг компаніям КШЕ)')?('ToRead'):('ToSign'));
  var name = "№" + (regNumber ? regNumber : CurrentDocument.id) + (!regDate ? "" : " від " + moment(regDate).format("DD.MM.YYYY"));
  doc = {
    docName: name,
    extSysDocId: CurrentDocument.id,
    ExtSysDocVersion: CurrentDocument.version,
    docType: "act",
    parties: [
      {
        taskType: "ToSign",
        taskState: "Done",
        legalEntityCode: EdocsApi.getAttributeValue("OrgEDRPOU").value,
        contactPersonEmail: EdocsApi.getEmployeeDataByEmployeeID(CurrentDocument.initiatorId).email,
        signatures: [],
      },
      {
        taskType: "ToSign",
        taskState: "NotAssigned",
        legalEntityCode: EdocsApi.getAttributeValue("CounterpartyEDRPOU").value,
        contactPersonEmail: EdocsApi.getAttributeValue("CounterpartyEmailAuthorisedPersons").value,
        sendByService: sendByService,
        expectedSignatures: [],
      },
    ],
    sendingSettings: {
      attachFiles: "fixed",
      attachSignatures: "signatureAndStamp",
    },
  };

  EdocsApi.setAttributeValue({ code: "LSDJSON", value: JSON.stringify(doc) });
}

function onTaskExecuteSendOutDoc(routeStage) {
  if (routeStage.executionResult != "rejected") {
    setDataForESIGN();

    var methodData = {
      extSysDocId: CurrentDocument.id,
      ExtSysDocVersion: CurrentDocument.version,
    };
    routeStage.externalAPIExecutingParams = {
      externalSystemCode: "ESIGN",
      externalSystemMethod: "integration/importDoc",
      data: methodData,
      executeAsync: true,
    };
  }
}
/*
function onCreate(){
    if(CurrentDocument.inExtId){
        var attributeValues = EdocsApi.getInExtAttributes(CurrentDocument.id.toString())?.attributeValues;
        if(attributeValues){
            EdocsApi.setAttributeValue({code: 'OrgName', value: EdocsApi.findElementByProperty('code', 'HomeOrgName', attributeValues)?.value, text: null});
            EdocsApi.setAttributeValue({code: 'OrgEDRPOU', value: EdocsApi.findElementByProperty('code', 'HomeOrgEDRPOU', attributeValues)?.value, text: null});
            EdocsApi.setAttributeValue({code: 'OrgIPN', value: EdocsApi.findElementByProperty('code', 'HomeOrgIPN', attributeValues)?.value, text: null});
            EdocsApi.setAttributeValue({code: 'CounterpartyName', value: EdocsApi.findElementByProperty('code', 'ContractorName', attributeValues)?.value, text: null});
            EdocsApi.setAttributeValue({code: 'CounterpartyEDRPOU', value: EdocsApi.findElementByProperty('code', 'ContractorEDRPOU', attributeValues)?.value, text: null});
            EdocsApi.setAttributeValue({code: 'ContractorIPN', value: EdocsApi.findElementByProperty('code', 'ContractorIPN', attributeValues)?.value, text: null});
        }
    }
}
*/

function onSearchCounterparty(request) {
  request.filterCollection.push({
    attributeCode: "ContractorType",
    value: "Creditor",
  });
}

function onTaskExecuteSend1C(routeStage) {
  if (routeStage.executionResult == "executed") {
    sendToCreate1Cdoc();
  }
}
