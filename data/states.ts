export interface IndianState {
  slug: string;
  name: string;
  type: "state" | "ut";
  keyIndustries: string[];
  registeredCompanies: string;
  dpdpConcerns: string;
}

export const INDIAN_STATES: IndianState[] = [
  { slug: "andhra-pradesh", name: "Andhra Pradesh", type: "state", keyIndustries: ["IT", "Pharma", "Agriculture"], registeredCompanies: "2.5 lakh+", dpdpConcerns: "Large IT and pharma sectors handling personal health and employee data" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh", type: "state", keyIndustries: ["Tourism", "Hydropower", "Agriculture"], registeredCompanies: "10,000+", dpdpConcerns: "Tourism sector collecting visitor personal data" },
  { slug: "assam", name: "Assam", type: "state", keyIndustries: ["Tea", "Oil & Gas", "IT"], registeredCompanies: "50,000+", dpdpConcerns: "Growing IT sector and oil companies processing employee data" },
  { slug: "bihar", name: "Bihar", type: "state", keyIndustries: ["Agriculture", "Education", "FMCG"], registeredCompanies: "75,000+", dpdpConcerns: "Large education sector handling student data" },
  { slug: "chhattisgarh", name: "Chhattisgarh", type: "state", keyIndustries: ["Mining", "Steel", "Power"], registeredCompanies: "40,000+", dpdpConcerns: "Industrial sector with employee data and contractor management" },
  { slug: "goa", name: "Goa", type: "state", keyIndustries: ["Tourism", "IT", "Pharma"], registeredCompanies: "30,000+", dpdpConcerns: "Tourism and hospitality handling guest personal data" },
  { slug: "gujarat", name: "Gujarat", type: "state", keyIndustries: ["Petrochemical", "Textiles", "IT", "Pharma"], registeredCompanies: "8 lakh+", dpdpConcerns: "Major industrial hub with extensive B2B and B2C data processing" },
  { slug: "haryana", name: "Haryana", type: "state", keyIndustries: ["IT", "Automobile", "Textiles"], registeredCompanies: "3 lakh+", dpdpConcerns: "Gurgaon IT hub processing massive volumes of personal data" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", type: "state", keyIndustries: ["Tourism", "Pharma", "Hydropower"], registeredCompanies: "25,000+", dpdpConcerns: "Pharma sector handling health-related personal data" },
  { slug: "jharkhand", name: "Jharkhand", type: "state", keyIndustries: ["Mining", "Steel", "Agriculture"], registeredCompanies: "30,000+", dpdpConcerns: "Mining companies with employee and community data" },
  { slug: "karnataka", name: "Karnataka", type: "state", keyIndustries: ["IT", "Biotechnology", "Aerospace"], registeredCompanies: "10 lakh+", dpdpConcerns: "India's IT capital — largest concentration of data processing businesses" },
  { slug: "kerala", name: "Kerala", type: "state", keyIndustries: ["Tourism", "IT", "Healthcare"], registeredCompanies: "4 lakh+", dpdpConcerns: "Healthcare and IT sectors with sensitive personal data" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", type: "state", keyIndustries: ["Agriculture", "IT", "Mining"], registeredCompanies: "3 lakh+", dpdpConcerns: "Growing IT parks and agricultural data processing" },
  { slug: "maharashtra", name: "Maharashtra", type: "state", keyIndustries: ["Finance", "IT", "Manufacturing", "Entertainment"], registeredCompanies: "15 lakh+", dpdpConcerns: "Mumbai financial hub — BFSI sector is the largest processor of personal financial data" },
  { slug: "manipur", name: "Manipur", type: "state", keyIndustries: ["Handloom", "Agriculture", "Tourism"], registeredCompanies: "8,000+", dpdpConcerns: "Government data processing and border area security data" },
  { slug: "meghalaya", name: "Meghalaya", type: "state", keyIndustries: ["Mining", "Tourism", "Agriculture"], registeredCompanies: "10,000+", dpdpConcerns: "Government schemes collecting personal data of beneficiaries" },
  { slug: "mizoram", name: "Mizoram", type: "state", keyIndustries: ["Agriculture", "Bamboo", "Tourism"], registeredCompanies: "5,000+", dpdpConcerns: "Digital governance initiatives collecting citizen data" },
  { slug: "nagaland", name: "Nagaland", type: "state", keyIndustries: ["Agriculture", "Tourism", "Handicrafts"], registeredCompanies: "5,000+", dpdpConcerns: "Government digitization and citizen data management" },
  { slug: "odisha", name: "Odisha", type: "state", keyIndustries: ["Mining", "Steel", "IT"], registeredCompanies: "2 lakh+", dpdpConcerns: "Industrial and IT sectors with growing data processing" },
  { slug: "punjab", name: "Punjab", type: "state", keyIndustries: ["Agriculture", "Manufacturing", "IT"], registeredCompanies: "2 lakh+", dpdpConcerns: "Agricultural tech and SME sector data processing" },
  { slug: "rajasthan", name: "Rajasthan", type: "state", keyIndustries: ["Tourism", "Mining", "Textiles", "IT"], registeredCompanies: "4 lakh+", dpdpConcerns: "Tourism industry collecting visitor data at scale" },
  { slug: "sikkim", name: "Sikkim", type: "state", keyIndustries: ["Tourism", "Pharma", "Organic Farming"], registeredCompanies: "5,000+", dpdpConcerns: "Tourism and pharma sectors with personal data" },
  { slug: "tamil-nadu", name: "Tamil Nadu", type: "state", keyIndustries: ["IT", "Automobile", "Manufacturing", "Healthcare"], registeredCompanies: "8 lakh+", dpdpConcerns: "Chennai IT corridor and automobile sector processing employee and customer data" },
  { slug: "telangana", name: "Telangana", type: "state", keyIndustries: ["IT", "Pharma", "Defence"], registeredCompanies: "5 lakh+", dpdpConcerns: "Hyderabad IT hub — second largest data processing center after Bangalore" },
  { slug: "tripura", name: "Tripura", type: "state", keyIndustries: ["Agriculture", "Rubber", "Tourism"], registeredCompanies: "8,000+", dpdpConcerns: "Government digital services and citizen data" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", type: "state", keyIndustries: ["IT", "Agriculture", "Manufacturing", "FMCG"], registeredCompanies: "8 lakh+", dpdpConcerns: "India's most populous state — massive volume of personal data across all sectors" },
  { slug: "uttarakhand", name: "Uttarakhand", type: "state", keyIndustries: ["Tourism", "IT", "Pharma"], registeredCompanies: "1 lakh+", dpdpConcerns: "IT parks and pharma companies processing personal data" },
  { slug: "west-bengal", name: "West Bengal", type: "state", keyIndustries: ["IT", "Manufacturing", "Agriculture", "FMCG"], registeredCompanies: "5 lakh+", dpdpConcerns: "Kolkata IT sector and large FMCG presence with consumer data" },
  { slug: "delhi", name: "Delhi", type: "ut", keyIndustries: ["Government", "IT", "Media", "Finance"], registeredCompanies: "12 lakh+", dpdpConcerns: "National capital — government and corporate data processing hub" },
  { slug: "jammu-kashmir", name: "Jammu & Kashmir", type: "ut", keyIndustries: ["Tourism", "Agriculture", "Handicrafts"], registeredCompanies: "30,000+", dpdpConcerns: "Tourism and government data processing" },
  { slug: "ladakh", name: "Ladakh", type: "ut", keyIndustries: ["Tourism", "Defence"], registeredCompanies: "2,000+", dpdpConcerns: "Tourism sector and defence-related data" },
  { slug: "chandigarh", name: "Chandigarh", type: "ut", keyIndustries: ["IT", "Education", "Government"], registeredCompanies: "25,000+", dpdpConcerns: "IT sector and educational institutions" },
  { slug: "puducherry", name: "Puducherry", type: "ut", keyIndustries: ["Tourism", "Manufacturing", "Healthcare"], registeredCompanies: "15,000+", dpdpConcerns: "Healthcare and tourism data processing" },
  { slug: "andaman-nicobar", name: "Andaman & Nicobar Islands", type: "ut", keyIndustries: ["Tourism", "Fisheries"], registeredCompanies: "3,000+", dpdpConcerns: "Tourism visitor data management" },
  { slug: "dadra-nagar-haveli-daman-diu", name: "Dadra & Nagar Haveli and Daman & Diu", type: "ut", keyIndustries: ["Manufacturing", "Tourism"], registeredCompanies: "10,000+", dpdpConcerns: "Industrial zone with employee data processing" },
  { slug: "lakshadweep", name: "Lakshadweep", type: "ut", keyIndustries: ["Tourism", "Fisheries"], registeredCompanies: "1,000+", dpdpConcerns: "Tourism permit system collecting visitor data" },
];

export function getStateBySlug(slug: string): IndianState | undefined {
  return INDIAN_STATES.find((s) => s.slug === slug);
}
