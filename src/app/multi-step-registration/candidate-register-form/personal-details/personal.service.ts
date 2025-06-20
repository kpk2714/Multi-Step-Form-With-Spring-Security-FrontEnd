import { Injectable } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Personal } from './personal';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http : HttpClient , private util : SecureStorageUtilService) { }

  state()
  {
    return [
        {
            sid: 1,
            sname: "Andhra Pradesh"
        },
        {
            sid: 2,
            sname: "Arunachal Pradesh"
        },
        {
            sid: 3,
            sname: "Assam"
        },
        {
            sid: 4,
            sname: "Bihar"
        },
        {
            sid: 5,
            sname: "Chhattisgarh"
        },
        {
            sid: 6,
            sname: "Goa"
        },
        {
            sid: 7,
            sname: "Gujarat"
        },
        {
            sid: 8,
            sname: "Haryana"
        },
        {
            sid: 9,
            sname: "Himachal Pradesh"
        },
        {
            sid: 10,
            sname: "Jammu and Kashmir"
        },
        {
            sid: 11,
            sname: "Jharkhand"
        },
        {
            sid: 12,
            sname: "Karnataka"
        },
        {
            sid: 13,
            sname: "Kerala"
        },
        {
            sid: 14,
            sname: "Madhya Pradesh"
        },
        {
            sid: 15,
            sname: "Maharashtra"
        },
        {
            sid: 16,
            sname: "Manipur"
        },
        {
            sid: 17,
            sname: "Meghalaya"
        },
        {
            sid: 18,
            sname: "Mizoram"
        },
        {
            sid: 19,
            sname: "Nagaland"
        },
        {
            sid: 20,
            sname: "Odisha"
        },
        {
            sid: 21,
            sname: "Punjab"
        },
        {
            sid: 22,
            sname: "Rajasthan"
        },
        {
            sid: 23,
            sname: "Sikkim"
        },
        {
            sid: 24,
            sname: "Tamil Nadu"
        },
        {
            sid: 25,
            sname: "Telangana"
        },
        {
            sid: 26,
            sname: "Tripura"
        },
        {
            sid: 27,
            sname: "Uttar Pradesh"
        },
        {
            sid: 28,
            sname: "Uttarakhand"
        },
        {
            sid: 29,
            sname: "West Bengal"
        },
    ]
  }

  district(){
    return [
          {
              sid : 1,
              disid : 101,
              disname : "Alluri Sitharama Raju"
          },
          {
              sid : 1,
              disid : 102,
              disname : "Anakapalli"
          },
          {
              sid : 1,
              disid : 103,
              disname : "Ananthapuram"
          },
          {
              sid : 1,
              disid : 104,
              disname : "Annamayya"
          },
          {
              sid : 1,
              disid : 105,
              disname : "Bapatla"
          },
          {
              sid : 1,
              disid : 106,
              disname : "Chittoor"
          },
          {
              sid : 1,
              disid : 107,
              disname : "East Godavari"
          },
          {
              sid : 1,
              disid : 108,
              disname : "Eluru"
          },
          {
              sid : 1,
              disid : 109,
              disname : "Guntur"
          },
          {
              sid : 1,
              disid : 110,
              disname : "Kakinada"
          },
          {
              sid : 1,
              disid : 111,
              disname : "Kona Seema"
          },
          {
              sid : 1,
              disid : 112,
              disname : "Krishna"
          },
          {
              sid : 1,
              disid : 113,
              disname : "Kurnool"
          },
          {
              sid : 1,
              disid : 114,
              disname : "Manyam"
          },
          {
              sid : 1,
              disid : 115,
              disname : "NTR District"
          },
          {
              sid : 1,
              disid : 116,
              disname : "Nandyal"
          },
          {
              sid : 1,
              disid : 117,
              disname : "Palnadu"
          },
          {
              sid : 1,
              disid : 118,
              disname : "Prakasam"
          },
          {
              sid : 1,
              disid : 119,
              disname : "SPS Nellore"
          },
          {
              sid : 1,
              disid : 120,
              disname : "Sri Satyasai"
          },
          {
              sid : 1,
              disid : 121,
              disname : "Sri. Balaji"
          },
          {
              sid : 1,
              disid : 122,
              disname : "Srikakulam"
          },
          {
              sid : 1,
              disid : 123,
              disname : "Vishakhapatnam"
          },
          {
              sid : 1,
              disid : 124,
              disname : "Vizianagaram"
          },
          {
              sid : 1,
              disid : 125,
              disname : "West Godavari"
          },
          {
              sid : 1,
              disid : 126,
              disname : "YSR Kadapa"
          },


          {
              sid : 2,
              disid : 201,
              disname : "ANJAW"
          },
          {
              sid : 2,
              disid : 202,
              disname : "Capital Complex Itanagar"
          },
          {
              sid : 2,
              disid : 203,
              disname : "Changlang"
          },
          {
              sid : 2,
              disid : 204,
              disname : "Dibang Valley"
          },
          {
              sid : 2,
              disid : 205,
              disname : "East Kameng"
          },
          {
              sid : 2,
              disid : 206,
              disname : "East Siang"
          },
          {
              sid : 2,
              disid : 207,
              disname : "Kamle"
          },
          {
              sid : 2,
              disid : 208,
              disname : "Kra Daadi"
          },
          {
              sid : 2,
              disid : 209,
              disname : "Kurung Kumey"
          },
          {
              sid : 2,
              disid : 210,
              disname : "Lepa Rada"
          },
          {
              sid : 2,
              disid : 211,
              disname : "Lohit"
          },
          {
              sid : 2,
              disid : 212,
              disname : "Longding"
          },
          {
              sid : 2,
              disid : 213,
              disname : "Lower Siang"
          },
          {
              sid : 2,
              disid : 214,
              disname : "Lower Subansiri"
          },
          {
              sid : 2,
              disid : 215,
              disname : "Namsai"
          },
          {
              sid : 2,
              disid : 216,
              disname : "Pakke Kessang"
          },
          {
              sid : 2,
              disid : 217,
              disname : "Papum Pare"
          },
          {
              sid : 2,
              disid : 218,
              disname : "SHI YOMI"
          },
          {
              sid : 2,
              disid : 219,
              disname : "Siang"
          },
          {
              sid : 2,
              disid : 220,
              disname : "Tawang"
          },
          {
              sid : 2,
              disid : 221,
              disname : "Tirap"
          },
          {
              sid : 2,
              disid : 222,
              disname : "Upper Siang"
          },
          {
              sid : 2,
              disid : 223,
              disname : "Upper Subansiri"
          },
          {
              sid : 2,
              disid : 224,
              disname : "West Kameng"
          },
          {
              sid : 2,
              disid : 225,
              disname : "West Siang"
          },


          {
              sid : 3,
              disid : 301,
              disname : "Baksa"
          },
          {
              sid : 3,
              disid : 302,
              disname : "Barpeta"
          },
          {
              sid : 3,
              disid : 303,
              disname : "Bongaigaon"
          },
          {
              sid : 3,
              disid : 304,
              disname : "Cachar"
          },
          {
              sid : 3,
              disid : 305,
              disname : "Charaideo"
          },
          {
              sid : 3,
              disid : 306,
              disname : "Chirang"
          },
          {
              sid : 3,
              disid : 307,
              disname : "Darrang"
          },
          {
              sid : 3,
              disid : 308,
              disname : "Dhemaji"
          },
          {
              sid : 3,
              disid : 309,
              disname : "Dhubri"
          },
          {
              sid : 3,
              disid : 310,
              disname : "Dibrugarh"
          },
          {
              sid : 3,
              disid : 311,
              disname : "Dima Hasao"
          },
          {
              sid : 3,
              disid : 312,
              disname : "Goalpara"
          },
          {
              sid : 3,
              disid : 313,
              disname : "Golaghat"
          },
          {
              sid : 3,
              disid : 314,
              disname : "Hailakandi"
          },
          {
              sid : 3,
              disid : 315,
              disname : "Jorhat"
          },
          {
              sid : 3,
              disid : 316,
              disname : "Kamrup Metropolitan"
          },
          {
              sid : 3,
              disid : 317,
              disname : "Kamrup"
          },
          {
              sid : 3,
              disid : 318,
              disname : "Karbi Anglong"
          },
          {
              sid : 3,
              disid : 319,
              disname : "Karimganj"
          },
          {
              sid : 3,
              disid : 320,
              disname : "Kokrajhar"
          },
          {
              sid : 3,
              disid : 321,
              disname : "Lakhimpur"
          },
          {
              sid : 3,
              disid : 322,
              disname : "Majuli"
          },
          {
              sid : 3,
              disid : 323,
              disname : "Morigaon"
          },
          {
              sid : 3,
              disid : 324,
              disname : "Nagaon"
          },
          {
              sid : 3,
              disid : 325,
              disname : "Nalbari"
          },
          {
              sid : 3,
              disid : 326,
              disname : "Sivasagar"
          },
          {
              sid : 3,
              disid : 327,
              disname : "Sonitpur"
          },
          {
              sid : 3,
              disid : 328,
              disname : "South Salmara-Mankachar"
          },
          {
              sid : 3,
              disid : 329,
              disname : "Tinsukia"
          },
          {
              sid : 3,
              disid : 330,
              disname : "Udalguri"
          },
          {
              sid : 3,
              disid : 331,
              disname : "West Karbi Anglong"
          },


          {
              sid : 4,
              disid : 401,
              disname : "Araria"
          },
          {
              sid : 4,
              disid : 402,
              disname : "Arwal"
          },
          {
              sid : 4,
              disid : 403,
              disname : "Aurangabad"
          },
          {
              sid : 4,
              disid : 404,
              disname : "Banka"
          },
          {
              sid : 4,
              disid : 405,
              disname : "Begusarai"
          },
          {
              sid : 4,
              disid : 406,
              disname : "Bhagalpur"
          },
          {
              sid : 4,
              disid : 407,
              disname : "Bhojpur"
          },
          {
              sid : 4,
              disid : 408,
              disname : "Buxar"
          },
          {
              sid : 4,
              disid : 409,
              disname : "Darbhanga"
          },
          {
              sid : 4,
              disid : 410,
              disname : "East Champaran"
          },
          {
              sid : 4,
              disid : 411,
              disname : "Gaya"
          },
          {
              sid : 4,
              disid : 412,
              disname : "Gopalganj"
          },
          {
              sid : 4,
              disid : 413,
              disname : "Jamui"
          },
          {
              sid : 4,
              disid : 414,
              disname : "Jehanabad"
          },
          {
              sid : 4,
              disid : 415,
              disname : "Khagaria"
          },
          {
              sid : 4,
              disid : 416,
              disname : "Kishanganj"
          },
          {
              sid : 4,
              disid : 417,
              disname : "Kaimur"
          },
          {
              sid : 4,
              disid : 418,
              disname : "Katihar"
          },
          {
              sid : 4,
              disid : 419,
              disname : "Lakhisarai"
          },
          {
              sid : 4,
              disid : 420,
              disname : "Madhubani"
          },
          {
              sid : 4,
              disid : 421,
              disname : "Munger"
          },
          {
              sid : 4,
              disid : 422,
              disname : "Madhepura"
          },
          {
              sid : 4,
              disid : 423,
              disname : "Muzaffarpur"
          },
          {
              sid : 4,
              disid : 424,
              disname : "Nalanda"
          },
          {
              sid : 4,
              disid : 425,
              disname : "Nawada"
          },
          {
              sid : 4,
              disid : 426,
              disname : "Patna"
          },
          {
              sid : 4,
              disid : 427,
              disname : "Purnia"
          },
          {
              sid : 4,
              disid : 428,
              disname : "Rohtas"
          },
          {
              sid : 4,
              disid : 429,
              disname : "Saharsa"
          },
          {
              sid : 4,
              disid : 430,
              disname : "Samastipur"
          },
          {
              sid : 4,
              disid : 431,
              disname : "Sheohar"
          },
          {
              sid : 4,
              disid : 432,
              disname : "Sheikhpura"
          },
          {
              sid : 4,
              disid : 433,
              disname : "Saran"
          },
          {
              sid : 4,
              disid : 434,
              disname : "Sitamarhi"
          },
          {
              sid : 4,
              disid : 435,
              disname : "Supaul"
          },
          {
              sid : 4,
              disid : 436,
              disname : "Siwan"
          },
          {
              sid : 4,
              disid : 437,
              disname : "Vaishali"
          },
          {
              sid : 4,
              disid : 438,
              disname : "West Champaran"
          },


          {
              sid : 5,
              disid : 501,
              disname : "Balod"
          },
          {
              sid : 5,
              disid : 502,
              disname : "Baloda Bazar"
          },
          {
              sid : 5,
              disid : 503,
              disname : "Balrampur"
          },
          {
              sid : 5,
              disid : 504,
              disname : "Bastar"
          },
          {
              sid : 5,
              disid : 505,
              disname : "Bemetara"
          },
          {
              sid : 5,
              disid : 506,
              disname : "Bijapur"
          },
          {
              sid : 5,
              disid : 507,
              disname : "Bilaspur"
          },
          {
              sid : 5,
              disid : 508,
              disname : "Dantewada"
          },
          {
              sid : 5,
              disid : 509,
              disname : "Dhamtari"
          },
          {
              sid : 5,
              disid : 510,
              disname : "Durg"
          },
          {
              sid : 5,
              disid : 511,
              disname : "Gariaband"
          },
          {
              sid : 5,
              disid : 512,
              disname : "Gaurella-Pendra-Marwahi"
          },
          {
              sid : 5,
              disid : 513,
              disname : "Janjgir-Champa"
          },
          {
              sid : 5,
              disid : 514,
              disname : "Jashpur"
          },
          {
              sid : 5,
              disid : 515,
              disname : "Kabirdham"
          },
          {
              sid : 5,
              disid : 516,
              disname : "Kanker"
          },
          {
              sid : 5,
              disid : 517,
              disname : "Kondagaon"
          },
          {
              sid : 5,
              disid : 518,
              disname : "Khairagarh-Chhuikhadan-Gandai"
          },
          {
              sid : 5,
              disid : 519,
              disname : "Korba"
          },
          {
              sid : 5,
              disid : 520,
              disname : "Koriya"
          },
          {
              sid : 5,
              disid : 521,
              disname : "Mahasamund"
          },
          {
              sid : 5,
              disid : 522,
              disname : "Manendragarh-Chirmiri-Bharatpur"
          },
          {
              sid : 5,
              disid : 523,
              disname : "Mohla-Manpur- Ambagarh Chowki"
          },
          {
              sid : 5,
              disid : 524,
              disname : "Mungeli"
          },
          {
              sid : 5,
              disid : 525,
              disname : "Narayanpur"
          },
          {
              sid : 5,
              disid : 526,
              disname : "Raigarh"
          },
          {
              sid : 5,
              disid : 527,
              disname : "Raipur"
          },
          {
              sid : 5,
              disid : 528,
              disname : "Rajnandgaon"
          },
          {
              sid : 5,
              disid : 529,
              disname : "Sarangarh-Bilaigarh"
          },
          {
              sid : 5,
              disid : 530,
              disname : "Sakti"
          },
          {
              sid : 5,
              disid : 531,
              disname : "Sukma"
          },
          {
              sid : 5,
              disid : 532,
              disname : "Surajpur"
          },
          {
              sid : 5,
              disid : 533,
              disname : "Surguja"
          },

          
          {
              sid : 6,
              disid : 601,
              disname : "North Goa"
          },
          {
              sid : 6,
              disid : 602,
              disname : "South Goa"
          },



          {
              sid : 7,
              disid : 701,
              disname : "Ahmedabad"
          },
          {
              sid : 7,
              disid : 702,
              disname : "Amreli"
          },
          {
              sid : 7,
              disid : 703,
              disname : "Anand"
          },
          {
              sid : 7,
              disid : 704,
              disname : "Aravalli"
          },
          {
              sid : 7,
              disid : 705,
              disname : "Banaskantha"
          },
          {
              sid : 7,
              disid : 706,
              disname : "Bharuch"
          },
          {
              sid : 7,
              disid : 707,
              disname : "Bhavnagar"
          },
          {
              sid : 7,
              disid : 708,
              disname : "Botad"
          },
          {
              sid : 7,
              disid : 709,
              disname : "Chhota Udaipur"
          },
          {
              sid : 7,
              disid : 710,
              disname : "Dahod"
          },
          {
              sid : 7,
              disid : 711,
              disname : "Dang"
          },
          {
              sid : 7,
              disid : 712,
              disname : "Devbhoomi Dwarka"
          },
          {
              sid : 7,
              disid : 713,
              disname : "Gandhinagar"
          },
          {
              sid : 7,
              disid : 714,
              disname : "Gir Somnath"
          },
          {
              sid : 7,
              disid : 715,
              disname : "Jamnagar"
          },
          {
              sid : 7,
              disid : 716,
              disname : "Junagadh"
          },
          {
              sid : 7,
              disid : 717,
              disname : "Kutch"
          },
          {
              sid : 7,
              disid : 718,
              disname : "Kheda"
          },
          {
              sid : 7,
              disid : 719,
              disname : "Mahisagar"
          },
          {
              sid : 7,
              disid : 720,
              disname : "Mehsana"
          },
          {
              sid : 7,
              disid : 721,
              disname : "Morbi"
          },
          {
              sid : 7,
              disid : 722,
              disname : "Narmada"
          },
          {
              sid : 7,
              disid : 723,
              disname : "Navsari"
          },
          {
              sid : 7,
              disid : 724,
              disname : "Panchmahal"
          },
          {
              sid : 7,
              disid : 725,
              disname : "Patan"
          },
          {
              sid : 7,
              disid : 726,
              disname : "Porbandar"
          },
          {
              sid : 7,
              disid : 727,
              disname : "Rajkot"
          },
          {
              sid : 7,
              disid : 728,
              disname : "Sabarkantha"
          },
          {
              sid : 7,
              disid : 729,
              disname : "Surat"
          },
          {
              sid : 7,
              disid : 730,
              disname : "Surendranagar"
          },
          {
              sid : 7,
              disid : 731,
              disname : "Tapi"
          },
          {
              sid : 7,
              disid : 732,
              disname : "Vadodara"
          },
          {
              sid : 7,
              disid : 733,
              disname : "Valsad"
          },



          {
              sid : 8,
              disid : 801,
              disname : "Ambala"
          },
          {
              sid : 8,
              disid : 802,
              disname : "Bhiwani"
          },
          {
              sid : 8,
              disid : 803,
              disname : "Charkhi Dadri"
          },
          {
              sid : 8,
              disid : 804,
              disname : "Faridabad"
          },
          {
              sid : 8,
              disid : 805,
              disname : "Fatehabad"
          },
          {
              sid : 8,
              disid : 806,
              disname : "Gurugram"
          },
          {
              sid : 8,
              disid : 807,
              disname : "Hisar"
          },
          {
              sid : 8,
              disid : 808,
              disname : "Jhajjar"
          },
          {
              sid : 8,
              disid : 809,
              disname : "Jind"
          },
          {
              sid : 8,
              disid : 810,
              disname : "Kaithal"
          },
          {
              sid : 8,
              disid : 811,
              disname : "Karnal"
          },
          {
              sid : 8,
              disid : 812,
              disname : "Kurukshetra	"
          },
          {
              sid : 8,
              disid : 813,
              disname : "Mahendragarh"
          },
          {
              sid : 8,
              disid : 814,
              disname : "Nuh"
          },
          {
              sid : 8,
              disid : 815,
              disname : "Palwal"
          },
          {
              sid : 8,
              disid : 816,
              disname : "Panchkula"
          },
          {
              sid : 8,
              disid : 817,
              disname : "Panipat"
          },
          {
              sid : 8,
              disid : 818,
              disname : "Rewari"
          },
          {
              sid : 8,
              disid : 819,
              disname : "Rohtak"
          },
          {
              sid : 8,
              disid : 820,
              disname : "Sirsa"
          },
          {
              sid : 8,
              disid : 821,
              disname : "Sonipat"
          },
          {
              sid : 8,
              disid : 822,
              disname : "Yamunanagar"
          },



          {
              sid : 9,
              disid : 901,
              disname : "Bilaspur"
          },
          {
              sid : 9,
              disid : 902,
              disname : "Chamba"
          },
          {
              sid : 9,
              disid : 903,
              disname : "Hamirpur"
          },
          {
              sid : 9,
              disid : 904,
              disname : "Kangra"
          },
          {
              sid : 9,
              disid : 905,
              disname : "Kinnaur"
          },
          {
              sid : 9,
              disid : 906,
              disname : "Kullu"
          },
          {
              sid : 9,
              disid : 907,
              disname : "Lahaul and Spiti"
          },
          {
              sid : 9,
              disid : 908,
              disname : "Mandi"
          },
          {
              sid : 9,
              disid : 909,
              disname : "Shimla"
          },
          {
              sid : 9,
              disid : 910,
              disname : "Sirmaur"
          },
          {
              sid : 9,
              disid : 911,
              disname : "Solan"
          },
          {
              sid : 9,
              disid : 912,
              disname : "Una"
          },

          
          {
              sid : 10,
              disid : 1001,
              disname : "Doda"
          },
          {
              sid : 10,
              disid : 1002,
              disname : "Jammu"
          },
          {
              sid : 10,
              disid : 1003,
              disname : "Kathua"
          },
          {
              sid : 10,
              disid : 1004,
              disname : "Kishtwar"
          },
          {
              sid : 10,
              disid : 1005,
              disname : "Poonch"
          },
          {
              sid : 10,
              disid : 1006,
              disname : "Rajouri"
          },
          {
              sid : 10,
              disid : 1007,
              disname : "Ramban"
          },
          {
              sid : 10,
              disid : 1008,
              disname : "Reasi"
          },
          {
              sid : 10,
              disid : 1009,
              disname : "Samba"
          },
          {
              sid : 10,
              disid : 1010,
              disname : "Udhampur"
          },
          {
              sid : 10,
              disid : 1011,
              disname : "Anantnag"
          },
          {
              sid : 10,
              disid : 1012,
              disname : "Bandipora"
          },
          {
              sid : 10,
              disid : 1013,
              disname : "Baramulla"
          },
          {
              sid : 10,
              disid : 1014,
              disname : "Budgam"
          },
          {
              sid : 10,
              disid : 1015,
              disname : "Ganderbal"
          },
          {
              sid : 10,
              disid : 1016,
              disname : "Kulgam"
          },
          {
              sid : 10,
              disid : 1017,
              disname : "Kupwara"
          },
          {
              sid : 10,
              disid : 1018,
              disname : "Pulwama"
          },
          {
              sid : 10,
              disid : 1019,
              disname : "Shopian"
          },
          {
              sid : 10,
              disid : 1020,
              disname : "Srinagar"
          },
          {
              sid : 10,
              disid : 1021,
              disname : "Kargil"
          },
          {
              sid : 10,
              disid : 1022,
              disname : "Leh"
          },



          {
              sid : 11,
              disid : 1101,
              disname : "Bokaro"
          },
          {
              sid : 11,
              disid : 1102,
              disname : "Chatra"
          },
          {
              sid : 11,
              disid : 1103,
              disname : "Deoghar"
          },
          {
              sid : 11,
              disid : 1104,
              disname : "Dhanbad"
          },
          {
              sid : 11,
              disid : 1105,
              disname : "Dumka"
          },
          {
              sid : 11,
              disid : 1106,
              disname : "East Singhbhum"
          },
          {
              sid : 11,
              disid : 1107,
              disname : "Garhwa"
          },
          {
              sid : 11,
              disid : 1108,
              disname : "Giridih"
          },
          {
              sid : 11,
              disid : 1109,
              disname : "Godda"
          },
          {
              sid : 11,
              disid : 1110,
              disname : "Gumla"
          },
          {
              sid : 11,
              disid : 1111,
              disname : "Hazaribagh"
          },
          {
              sid : 11,
              disid : 1112,
              disname : "Jamtara"
          },
          {
              sid : 11,
              disid : 1113,
              disname : "Khunti"
          },
          {
              sid : 11,
              disid : 1114,
              disname : "Koderma"
          },
          {
              sid : 11,
              disid : 1115,
              disname : "Latehar"
          },
          {
              sid : 11,
              disid : 1116,
              disname : "Lohardaga"
          },
          {
              sid : 11,
              disid : 1117,
              disname : "Pakur"
          },
          {
              sid : 11,
              disid : 1118,
              disname : "Palamu"
          },
          {
              sid : 11,
              disid : 1119,
              disname : "Ramgarh"
          },
          {
              sid : 11,
              disid : 1120,
              disname : "Ranchi"
          },
          {
              sid : 11,
              disid : 1121,
              disname : "Sahebganj"
          },
          {
              sid : 11,
              disid : 1122,
              disname : "Seraikela"
          },
          {
              sid : 11,
              disid : 1123,
              disname : "Simdega"
          },
          {
              sid : 11,
              disid : 1124,
              disname : "West Singhbhum"
          },



          {
              sid : 12,
              disid : 1201,
              disname : "Bagalkot"
          },
          {
              sid : 12,
              disid : 1202,
              disname : "Bengaluru Urban"
          },
          {
              sid : 12,
              disid : 1203,
              disname : "Bengaluru Rural"
          },
          {
              sid : 12,
              disid : 1204,
              disname : "Belagavi"
          },
          {
              sid : 12,
              disid : 1205,
              disname : "Ballari"
          },
          {
              sid : 12,
              disid : 1206,
              disname : "Bidar"
          },
          {
              sid : 12,
              disid : 1207,
              disname : "Vijayapur"
          },
          {
              sid : 12,
              disid : 1208,
              disname : "Chamarajanagar"
          },
          {
              sid : 12,
              disid : 1209,
              disname : "Chikballapur"
          },
          {
              sid : 12,
              disid : 1210,
              disname : "Chikkamagaluru"
          },
          {
              sid : 12,
              disid : 1211,
              disname : "Chitradurga"
          },
          {
              sid : 12,
              disid : 1212,
              disname : "Dakshina Kannada"
          },
          {
              sid : 12,
              disid : 1213,
              disname : "Davanagere"
          },
          {
              sid : 12,
              disid : 1214,
              disname : "Dharwad"
          },
          {
              sid : 12,
              disid : 1215,
              disname : "Gadag"
          },
          {
              sid : 12,
              disid : 1216,
              disname : "Kalaburagi"
          },
          {
              sid : 12,
              disid : 1217,
              disname : "Hassan"
          },
          {
              sid : 12,
              disid : 1218,
              disname : "Haveri"
          },
          {
              sid : 12,
              disid : 1219,
              disname : "Kodagu"
          },
          {
              sid : 12,
              disid : 1220,
              disname : "Kolar"
          },
          {
              sid : 12,
              disid : 1221,
              disname : "Koppal"
          },
          {
              sid : 12,
              disid : 1222,
              disname : "Mandya"
          },
          {
              sid : 12,
              disid : 1223,
              disname : "Mysuru"
          },
          {
              sid : 12,
              disid : 1224,
              disname : "Raichur"
          },
          {
              sid : 12,
              disid : 1225,
              disname : "Ramanagara"
          },
          {
              sid : 12,
              disid : 1226,
              disname : "Shivamogga"
          },
          {
              sid : 12,
              disid : 1227,
              disname : "Tumakuru"
          },
          {
              sid : 12,
              disid : 1228,
              disname : "Udupi"
          },
          {
              sid : 12,
              disid : 1229,
              disname : "Uttara Kannada"
          },
          {
              sid : 12,
              disid : 1230,
              disname : "Yadgir"
          },

          

          {
              sid : 13,
              disid : 1301,
              disname : "Alappuzha"
          },
          {
              sid : 13,
              disid : 1302,
              disname : "Ernakulam"
          },
          {
              sid : 13,
              disid : 1303,
              disname : "Idukki"
          },
          {
              sid : 13,
              disid : 1304,
              disname : "Kannur"
          },
          {
              sid : 13,
              disid : 1305,
              disname : "Kasaragod"
          },
          {
              sid : 13,
              disid : 1306,
              disname : "Kollam"
          },
          {
              sid : 13,
              disid : 1307,
              disname : "Kottayam"
          },
          {
              sid : 13,
              disid : 1308,
              disname : "Kozhikode"
          },
          {
              sid : 13,
              disid : 1309,
              disname : "Malappuram"
          },
          {
              sid : 13,
              disid : 1310,
              disname : "Palakkad"
          },
          {
              sid : 13,
              disid : 1311,
              disname : "Pathanamthitta"
          },
          {
              sid : 13,
              disid : 1312,
              disname : "Thiruvananthapuram"
          },
          {
              sid : 13,
              disid : 1313,
              disname : "Thrissur"
          },
          {
              sid : 13,
              disid : 1314,
              disname : "Wayanad"
          },




          {
              sid : 14,
              disid : 1401,
              disname : "Agar Malwa"
          },
          {
              sid : 14,
              disid : 1402,
              disname : "Alirajpur"
          },
          {
              sid : 14,
              disid : 1403,
              disname : "Anuppur"
          },
          {
              sid : 14,
              disid : 1404,
              disname : "Ashoknagar"
          },
          {
              sid : 14,
              disid : 1405,
              disname : "Balaghat"
          },
          {
              sid : 14,
              disid : 1406,
              disname : "Barwan"
          },
          {
              sid : 14,
              disid : 1407,
              disname : "Betul"
          },
          {
              sid : 14,
              disid : 1408,
              disname : "Bhind"
          },
          {
              sid : 14,
              disid : 1409,
              disname : "Bhopal"
          },
          {
              sid : 14,
              disid : 1410,
              disname : "Burhanpur"
          },
          {
              sid : 14,
              disid : 1411,
              disname : "Chhatarpur"
          },
          {
              sid : 14,
              disid : 1412,
              disname : "Chhindwara"
          },
          {
              sid : 14,
              disid : 1413,
              disname : "Damoh"
          },
          {
              sid : 14,
              disid : 1414,
              disname : "Datia"
          },
          {
              sid : 14,
              disid : 1415,
              disname : "Dewas"
          },
          {
              sid : 14,
              disid : 1416,
              disname : "Dhar"
          },
          {
              sid : 14,
              disid : 1417,
              disname : "Dindori"
          },
          {
              sid : 14,
              disid : 1418,
              disname : "East Nimar"
          },
          {
              sid : 14,
              disid : 1419,
              disname : "Guna"
          },
          {
              sid : 14,
              disid : 1420,
              disname : "Gwalior"
          },
          {
              sid : 14,
              disid : 1421,
              disname : "Harda"
          },
          {
              sid : 14,
              disid : 1422,
              disname : "Hoshangabad"
          },
          {
              sid : 14,
              disid : 1423,
              disname : "Indore"
          },
          {
              sid : 14,
              disid : 1424,
              disname : "Jabalpur"
          },
          {
              sid : 14,
              disid : 1425,
              disname : "Jhabua"
          },
          {
              sid : 14,
              disid : 1426,
              disname : "Katni"
          },
          {
              sid : 14,
              disid : 1427,
              disname : "Mandla"
          },
          {
              sid : 14,
              disid : 1428,
              disname : "Mandsaur"
          },
          {
              sid : 14,
              disid : 1429,
              disname : "Morena"
          },
          {
              sid : 14,
              disid : 1430,
              disname : "Narsinghpur"
          },
          {
              sid : 14,
              disid : 1431,
              disname : "Neemuch"
          },
          {
              sid : 14,
              disid : 1432,
              disname : "Niwari"
          },
          {
              sid : 14,
              disid : 1433,
              disname : "Panna"
          },
          {
              sid : 14,
              disid : 1434,
              disname : "Raisen"
          },
          {
              sid : 14,
              disid : 1435,
              disname : "Rajgarh"
          },
          {
              sid : 14,
              disid : 1436,
              disname : "Ratlam"
          },
          {
              sid : 14,
              disid : 1437,
              disname : "Rewa"
          },
          {
              sid : 14,
              disid : 1438,
              disname : "Sagar"
          },
          {
              sid : 14,
              disid : 1439,
              disname : "Satna"
          },
          {
              sid : 14,
              disid : 1440,
              disname : "Sehore"
          },
          {
              sid : 14,
              disid : 1441,
              disname : "Seoni"
          },
          {
              sid : 14,
              disid : 1442,
              disname : "Shahdol"
          },
          {
              sid : 14,
              disid : 1443,
              disname : "Shajapur"
          },
          {
              sid : 14,
              disid : 1444,
              disname : "Sheopur"
          },
          {
              sid : 14,
              disid : 1445,
              disname : "Shivpuri"
          },
          {
              sid : 14,
              disid : 1446,
              disname : "Sidhi"
          },
          {
              sid : 14,
              disid : 1447,
              disname : "Singrauli"
          },
          {
              sid : 14,
              disid : 1448,
              disname : "Tikamgarh"
          },
          {
              sid : 14,
              disid : 1449,
              disname : "Ujjain"
          },
          {
              sid : 14,
              disid : 1450,
              disname : "Umaria"
          },
          {
              sid : 14,
              disid : 1451,
              disname : "Vidisha"
          },
          {
              sid : 14,
              disid : 1452,
              disname : "West Nimar"
          },



          {
              sid : 15,
              disid : 1501,
              disname : "Ahmednagar"
          },
          {
              sid : 15,
              disid : 1502,
              disname : "Akola"
          },
          {
              sid : 15,
              disid : 1503,
              disname : "Amravati"
          },
          {
              sid : 15,
              disid : 1504,
              disname : "Aurangabad"
          },
          {
              sid : 15,
              disid : 1505,
              disname : "Beed"
          },
          {
              sid : 15,
              disid : 1506,
              disname : "Bhandara"
          },
          {
              sid : 15,
              disid : 1507,
              disname : "Buldhana"
          },
          {
              sid : 15,
              disid : 1508,
              disname : "Chandrapur"
          },
          {
              sid : 15,
              disid : 1509,
              disname : "Dhule"
          },
          {
              sid : 15,
              disid : 1510,
              disname : "Gadchiroli"
          },
          {
              sid : 15,
              disid : 1511,
              disname : "Gondia"
          },
          {
              sid : 15,
              disid : 1512,
              disname : "Hingoli"
          },
          {
              sid : 15,
              disid : 1513,
              disname : "Jalgaon"
          },
          {
              sid : 15,
              disid : 1514,
              disname : "Jalna"
          },
          {
              sid : 15,
              disid : 1515,
              disname : "Kolhapur"
          },
          {
              sid : 15,
              disid : 1516,
              disname : "Latur"
          },
          {
              sid : 15,
              disid : 1517,
              disname : "Mumbai City"
          },
          {
              sid : 15,
              disid : 1518,
              disname : "Mumbai Suburban"
          },
          {
              sid : 15,
              disid : 1519,
              disname : "Nagpur"
          },
          {
              sid : 15,
              disid : 1520,
              disname : "Nanded"
          },
          {
              sid : 15,
              disid : 1521,
              disname : "Nandurbar"
          },
          {
              sid : 15,
              disid : 1522,
              disname : "Nashik"
          },
          {
              sid : 15,
              disid : 1523,
              disname : "Osmanabad"
          },
          {
              sid : 15,
              disid : 1524,
              disname : "Palghar"
          },
          {
              sid : 15,
              disid : 1525,
              disname : "Parbhani"
          },
          {
              sid : 15,
              disid : 1526,
              disname : "Pune"
          },
          {
              sid : 15,
              disid : 1527,
              disname : "Raigad"
          },
          {
              sid : 15,
              disid : 1528,
              disname : "Ratnagiri"
          },
          {
              sid : 15,
              disid : 1529,
              disname : "Sangli"
          },
          {
              sid : 15,
              disid : 1530,
              disname : "Satara"
          },
          {
              sid : 15,
              disid : 1531,
              disname : "Sindhudurg"
          },
          {
              sid : 15,
              disid : 1532,
              disname : "Solapur"
          },
          {
              sid : 15,
              disid : 1533,
              disname : "Thane"
          },
          {
              sid : 15,
              disid : 1534,
              disname : "Wardha"
          },
          {
              sid : 15,
              disid : 1535,
              disname : "Washim"
          },
          {
              sid : 15,
              disid : 1536,
              disname : "Yavatmal"
          },





          {
              sid : 16,
              disid : 1601,
              disname : "Bishnupur"
          },
          {
              sid : 16,
              disid : 1602,
              disname : "Thoubal"
          },
          {
              sid : 16,
              disid : 1603,
              disname : "Imphal East"
          },
          {
              sid : 16,
              disid : 1604,
              disname : "Imphal West"
          },
          {
              sid : 16,
              disid : 1605,
              disname : "Senapati"
          },
          {
              sid : 16,
              disid : 1605,
              disname : "Ukhrul"
          },
          {
              sid : 16,
              disid : 1606,
              disname : "Chandel"
          },
          {
              sid : 16,
              disid : 1607,
              disname : "Churachandpur"
          },
          {
              sid : 16,
              disid : 1608,
              disname : "Tamenglong"
          },





          {
              sid : 17,
              disid : 1701,
              disname : "East Garo Hills"
          },
          {
              sid : 17,
              disid : 1702,
              disname : "East Khasi Hills"
          },
          {
              sid : 17,
              disid : 1703,
              disname : "Jaintia Hills"
          },
          {
              sid : 17,
              disid : 1704,
              disname : "Ri Bhoi"
          },
          {
              sid : 17,
              disid : 1705,
              disname : "South Garo Hills"
          },
          {
              sid : 17,
              disid : 1706,
              disname : "West Garo Hills"
          },
          {
              sid : 17,
              disid : 1707,
              disname : "West Khasi Hills"
          },





          {
              sid : 18,
              disid : 1801,
              disname : "Aizawl"
          },
          {
              sid : 18,
              disid : 1802,
              disname : "Kolasib"
          },
          {
              sid : 18,
              disid : 1803,
              disname : "Lawngtlai"
          },
          {
              sid : 18,
              disid : 1804,
              disname : "Lunglei"
          },
          {
              sid : 18,
              disid : 1805,
              disname : "Mamit"
          },
          {
              sid : 18,
              disid : 1806,
              disname : "Saiha"
          },
          {
              sid : 18,
              disid : 1807,
              disname : "Serchhip"
          },
          {
              sid : 18,
              disid : 1808,
              disname : "Champhai"
          },




          {
              sid : 19,
              disid : 1901,
              disname : "Dimapur"
          },
          {
              sid : 19,
              disid : 1902,
              disname : "Kiphire"
          },
          {
              sid : 19,
              disid : 1903,
              disname : "Kohima"
          },
          {
              sid : 19,
              disid : 1904,
              disname : "Longleng"
          },
          {
              sid : 19,
              disid : 1905,
              disname : "Mokokchung"
          },
          {
              sid : 19,
              disid : 1906,
              disname : "Mon"
          },
          {
              sid : 19,
              disid : 1907,
              disname : "Peren"
          },
          {
              sid : 19,
              disid : 1908,
              disname : "Phek"
          },
          {
              sid : 19,
              disid : 1909,
              disname : "Tuensang"
          },
          {
              sid : 19,
              disid : 1910,
              disname : "Wokha"
          },
          {
              sid : 19,
              disid : 1911,
              disname : "Zunheboto"
          },
          {
              sid : 19,
              disid : 1912,
              disname : "Noklak"
          },



          {
              sid : 20,
              disid : 2001,
              disname : "Angul"
          },
          {
              sid : 20,
              disid : 2002,
              disname : "Boudh (Baudh)"
          },
          {
              sid : 20,
              disid : 2003,
              disname : "Balangir"
          },
          {
              sid : 20,
              disid : 2004,
              disname : "Bargarh"
          },
          {
              sid : 20,
              disid : 2005,
              disname : "Balasore (Baleswar)"
          },
          {
              sid : 20,
              disid : 2006,
              disname : "Bhadrak"
          },
          {
              sid : 20,
              disid : 2007,
              disname : "Cuttack"
          },
          {
              sid : 20,
              disid : 2008,
              disname : "Deogarh (Debagarh)"
          },
          {
              sid : 20,
              disid : 2009,
              disname : "Dhenkanal"
          },
          {
              sid : 20,
              disid : 2010,
              disname : "Ganjam"
          },
          {
              sid : 20,
              disid : 2011,
              disname : "Gajapati"
          },
          {
              sid : 20,
              disid : 2012,
              disname : "Jharsuguda"
          },
          {
              sid : 20,
              disid : 2013,
              disname : "Jajpur"
          },
          {
              sid : 20,
              disid : 2014,
              disname : "Jagatsinghapur"
          },
          {
              sid : 20,
              disid : 2015,
              disname : "Khordha"
          },
          {
              sid : 20,
              disid : 2016,
              disname : "Keonjhar (Kendujhar)"
          },
          {
              sid : 20,
              disid : 2017,
              disname : "Kalahandi"
          },
          {
              sid : 20,
              disid : 2018,
              disname : "Kandhamal"
          },
          {
              sid : 20,
              disid : 2019,
              disname : "Koraput"
          },
          {
              sid : 20,
              disid : 2020,
              disname : "Kendrapara"
          },
          {
              sid : 20,
              disid : 2021,
              disname : "Malkangiri"
          },
          {
              sid : 20,
              disid : 2022,
              disname : "Mayurbhanj"
          },
          {
              sid : 20,
              disid : 2023,
              disname : "Nabarangpur"
          },
          {
              sid : 20,
              disid : 2024,
              disname : "Nuapada"
          },
          {
              sid : 20,
              disid : 2025,
              disname : "Nayagarh"
          },
          {
              sid : 20,
              disid : 2026,
              disname : "Puri"
          },
          {
              sid : 20,
              disid : 2026,
              disname : "Rayagada"
          },
          {
              sid : 20,
              disid : 2027,
              disname : "Sambalpur"
          },
          {
              sid : 20,
              disid : 2028,
              disname : "Subarnapur (Sonepur)"
          },
          {
              sid : 20,
              disid : 2029,
              disname : "Sundargarh"
          },


          {
              sid : 21,
              disid : 2101,
              disname : "Amritsar"
          },
          {
              sid : 21,
              disid : 2102,
              disname : "Barnala"
          },
          {
              sid : 21,
              disid : 2103,
              disname : "Bathinda"
          },
          {
              sid : 21,
              disid : 2104,
              disname : "Faridkot"
          },
          {
              sid : 21,
              disid : 2105,
              disname : "Fatehgarh Sahib"
          },
          {
              sid : 21,
              disid : 2106,
              disname : "Firozpur"
          },
          {
              sid : 21,
              disid : 2107,
              disname : "Fazilka"
          },
          {
              sid : 21,
              disid : 2108,
              disname : "Gurdaspur"
          },
          {
              sid : 21,
              disid : 2109,
              disname : "Hoshiarpur"
          },
          {
              sid : 21,
              disid : 2110,
              disname : "Jalandhar"
          },
          {
              sid : 21,
              disid : 2111,
              disname : "Kapurthala"
          },
          {
              sid : 21,
              disid : 2112,
              disname : "Ludhiana"
          },
          {
              sid : 21,
              disid : 2113,
              disname : "Mansa"
          },
          {
              sid : 21,
              disid : 2114,
              disname : "Moga"
          },
          {
              sid : 21,
              disid : 2115,
              disname : "Sri Muktsar Sahib"
          },
          {
              sid : 21,
              disid : 2116,
              disname : "Pathankot"
          },
          {
              sid : 21,
              disid : 2117,
              disname : "Patiala"
          },
          {
              sid : 21,
              disid : 2118,
              disname : "Rupnagar"
          },
          {
              sid : 21,
              disid : 2119,
              disname : "Sahibzada Ajit Singh Nagar"
          },
          {
              sid : 21,
              disid : 2120,
              disname : "Sangrur"
          },
          {
              sid : 21,
              disid : 2121,
              disname : "Shahid Bhagat Singh Nagar"
          },
          {
              sid : 21,
              disid : 2122,
              disname : "Taran Taran"
          },


          
          {
              sid : 22,
              disid : 2201,
              disname : "Ajmer"
          },
          {
              sid : 22,
              disid : 2202,
              disname : "Alwar"
          },
          {
              sid : 22,
              disid : 2203,
              disname : "Banswara"
          },
          {
              sid : 22,
              disid : 2204,
              disname : "Baran"
          },
          {
              sid : 22,
              disid : 2205,
              disname : "Barmer"
          },
          {
              sid : 22,
              disid : 2206,
              disname : "Bharatpur"
          },
          {
              sid : 22,
              disid : 2207,
              disname : "Bhilwara"
          },
          {
              sid : 22,
              disid : 2208,
              disname : "Bikaner"
          },
          {
              sid : 22,
              disid : 2209,
              disname : "Bundi"
          },
          {
              sid : 22,
              disid : 2210,
              disname : "Chittorgarh"
          },
          {
              sid : 22,
              disid : 2211,
              disname : "Churu"
          },
          {
              sid : 22,
              disid : 2212,
              disname : "Dausa"
          },
          {
              sid : 22,
              disid : 2213,
              disname : "Dholpur"
          },
          {
              sid : 22,
              disid : 2214,
              disname : "Dungarpur"
          },
          {
              sid : 22,
              disid : 2215,
              disname : "Hanumangarh"
          },
          {
              sid : 22,
              disid : 2216,
              disname : "Jaipur"
          },
          {
              sid : 22,
              disid : 2217,
              disname : "Jaisalmer"
          },
          {
              sid : 22,
              disid : 2218,
              disname : "Jalor"
          },
          {
              sid : 22,
              disid : 2219,
              disname : "Jhalawar"
          },
          {
              sid : 22,
              disid : 2220,
              disname : "Jhunjhunu"
          },
          {
              sid : 22,
              disid : 2221,
              disname : "Jodhpur"
          },
          {
              sid : 22,
              disid : 2222,
              disname : "Karauli"
          },
          {
              sid : 22,
              disid : 2223,
              disname : "Kota"
          },
          {
              sid : 22,
              disid : 2224,
              disname : "Nagaur"
          },
          {
              sid : 22,
              disid : 2225,
              disname : "Pali"
          },
          {
              sid : 22,
              disid : 2226,
              disname : "Pratapgarh"
          },
          {
              sid : 22,
              disid : 2227,
              disname : "Rajsamand"
          },
          {
              sid : 22,
              disid : 2228,
              disname : "Sawai Madhopur"
          },
          {
              sid : 22,
              disid : 2229,
              disname : "Sikar"
          },
          {
              sid : 22,
              disid : 2230,
              disname : "Sirohi"
          },
          {
              sid : 22,
              disid : 2231,
              disname : "Sri Ganganagar"
          },
          {
              sid : 22,
              disid : 2232,
              disname : "Tonk"
          },
          {
              sid : 22,
              disid : 2233,
              disname : "Udaipur"
          },



          {
              sid : 23,
              disid : 2301,
              disname : "East Sikkim"
          },
          {
              sid : 23,
              disid : 2302,
              disname : "North Sikkim"
          },
          {
              sid : 23,
              disid : 2303,
              disname : "South Sikkim"
          },
          {
              sid : 23,
              disid : 2304,
              disname : "West Sikkim"
          },



          {
              sid : 24,
              disid : 2401,
              disname : "Ariyalur"
          },
          {
              sid : 24,
              disid : 2402,
              disname : "Chennai"
          },
          {
              sid : 24,
              disid : 2403,
              disname : "Coimbatore"
          },
          {
              sid : 24,
              disid : 2404,
              disname : "Cuddalore"
          },
          {
              sid : 24,
              disid : 2405,
              disname : "Dharmapuri"
          },
          {
              sid : 24,
              disid : 2406,
              disname : "Dindigul"
          },
          {
              sid : 24,
              disid : 2407,
              disname : "Erode"
          },
          {
              sid : 24,
              disid : 2408,
              disname : "Kallakurichi"
          },
          {
              sid : 24,
              disid : 2409,
              disname : "Kanchipuram"
          },
          {
              sid : 24,
              disid : 2410,
              disname : "Kanniyakumari"
          },
          {
              sid : 24,
              disid : 2411,
              disname : "Karur"
          },
          {
              sid : 24,
              disid : 2412,
              disname : "Krishnagiri"
          },
          {
              sid : 24,
              disid : 2413,
              disname : "Madurai"
          },
          {
              sid : 24,
              disid : 2414,
              disname : "Nagapattinam"
          },
          {
              sid : 24,
              disid : 2415,
              disname : "Namakkal"
          },
          {
              sid : 24,
              disid : 2416,
              disname : "Nilgiris"
          },
          {
              sid : 24,
              disid : 2417,
              disname : "Perambalur"
          },
          {
              sid : 24,
              disid : 2418,
              disname : "Pudukkottai"
          },
          {
              sid : 24,
              disid : 2419,
              disname : "Ramanathapuram"
          },
          {
              sid : 24,
              disid : 2420,
              disname : "Salem"
          },
          {
              sid : 24,
              disid : 2421,
              disname : "Sivaganga"
          },
          {
              sid : 24,
              disid : 2422,
              disname : "Thanjavur"
          },
          {
              sid : 24,
              disid : 2423,
              disname : "Theni"
          },
          {
              sid : 24,
              disid : 2424,
              disname : "Thoothukudi"
          },
          {
              sid : 24,
              disid : 2425,
              disname : "Tiruchirappalli"
          },
          {
              sid : 24,
              disid : 2426,
              disname : "Tirunelveli"
          },
          {
              sid : 24,
              disid : 2427,
              disname : "Tiruppur"
          },
          {
              sid : 24,
              disid : 2428,
              disname : "Tiruvallur"
          },
          {
              sid : 24,
              disid : 2429,
              disname : "Tiruvannamalai"
          },
          {
              sid : 24,
              disid : 2430,
              disname : "Tiruvarur"
          },
          {
              sid : 24,
              disid : 2431,
              disname : "Vellore"
          },
          {
              sid : 24,
              disid : 2432,
              disname : "Viluppuram"
          },
          {
              sid : 24,
              disid : 2433,
              disname : "Virudhunagar"
          },



          {
              sid : 25,
              disid : 2501,
              disname : "Adilabad"
          },
          {
              sid : 25,
              disid : 2502,
              disname : "Bhadradri Kothagudem"
          },
          {
              sid : 25,
              disid : 2503,
              disname : "Hyderabad"
          },
          {
              sid : 25,
              disid : 2504,
              disname : "Jagitial"
          },
          {
              sid : 25,
              disid : 2505,
              disname : "Jangaon"
          },
          {
              sid : 25,
              disid : 2506,
              disname : "Jayashankar Bhupalapally"
          },
          {
              sid : 25,
              disid : 2507,
              disname : "Jogulamba Gadwal"
          },
          {
              sid : 25,
              disid : 2508,
              disname : "Kamareddy"
          },
          {
              sid : 25,
              disid : 2509,
              disname : "Karimnagar"
          },
          {
              sid : 25,
              disid : 2510,
              disname : "Khammam"
          },
          {
              sid : 25,
              disid : 2511,
              disname : "Kumarambheem Asifabad"
          },
          {
              sid : 25,
              disid : 2512,
              disname : "Mahabubabad"
          },
          {
              sid : 25,
              disid : 2513,
              disname : "Mahabubnagar"
          },
          {
              sid : 25,
              disid : 2514,
              disname : "Mancherial district"
          },
          {
              sid : 25,
              disid : 2515,
              disname : "Medak"
          },
          {
              sid : 25,
              disid : 2516,
              disname : "Medchal–Malkajgiri"
          },
          {
              sid : 25,
              disid : 2517,
              disname : "Mulugu"
          },
          {
              sid : 25,
              disid : 2518,
              disname : "Nagarkurnool"
          },
          {
              sid : 25,
              disid : 2519,
              disname : "Narayanpet"
          },
          {
              sid : 25,
              disid : 2520,
              disname : "Nalgonda"
          },
          {
              sid : 25,
              disid : 2521,
              disname : "Nirmal"
          },
          {
              sid : 25,
              disid : 2522,
              disname : "Nizamabad"
          },
          {
              sid : 25,
              disid : 2523,
              disname : "Peddapalli"
          },
          {
              sid : 25,
              disid : 2524,
              disname : "Rajanna Sircilla"
          },
          {
              sid : 25,
              disid : 2525,
              disname : "Ranga Reddy"
          },
          {
              sid : 25,
              disid : 2526,
              disname : "Sangareddy"
          },
          {
              sid : 25,
              disid : 2527,
              disname : "Siddipet"
          },
          {
              sid : 25,
              disid : 2528,
              disname : "Suryapet"
          },
          {
              sid : 25,
              disid : 2529,
              disname : "Vikarabad"
          },
          {
              sid : 25,
              disid : 2530,
              disname : "Wanaparthy"
          },
          {
              sid : 25,
              disid : 2531,
              disname : "Warangal Rural"
          },
          {
              sid : 25,
              disid : 2532,
              disname : "Warangal Urban"
          },
          {
              sid : 25,
              disid : 2533,
              disname : "Yadadri Bhuvanagiri"
          },


          {
              sid : 26,
              disid : 2601,
              disname : "Dhalai"
          },
          {
              sid : 26,
              disid : 2602,
              disname : "North Tripura"
          },
          {
              sid : 26,
              disid : 2603,
              disname : "South Tripura"
          },
          {
              sid : 26,
              disid : 2604,
              disname : "West Tripura"
          },


          {
              sid : 27,
              disid : 2701,
              disname : "Agra"
          },
          {
              sid : 27,
              disid : 2702,
              disname : "Aligarh"
          },
          {
              sid : 27,
              disid : 2703,
              disname : "Allahabad"
          },
          {
              sid : 27,
              disid : 2704,
              disname : "Ambedkar Nagar"
          },
          {
              sid : 27,
              disid : 2705,
              disname : "Amethi"
          },
          {
              sid : 27,
              disid : 2706,
              disname : "Amroha"
          },
          {
              sid : 27,
              disid : 2707,
              disname : "Auraiya"
          },
          {
              sid : 27,
              disid : 2708,
              disname : "Azamgarh"
          },
          {
              sid : 27,
              disid : 2709,
              disname : "Badaun"
          },
          {
              sid : 27,
              disid : 2710,
              disname : "Bagpat"
          },
          {
              sid : 27,
              disid : 2711,
              disname : "Bahraich"
          },
          {
              sid : 27,
              disid : 2712,
              disname : "Ballia"
          },
          {
              sid : 27,
              disid : 2713,
              disname : "Balrampur"
          },
          {
              sid : 27,
              disid : 2714,
              disname : "Banda"
          },
          {
              sid : 27,
              disid : 2715,
              disname : "Barabanki"
          },
          {
              sid : 27,
              disid : 2716,
              disname : "Bareilly"
          },
          {
              sid : 27,
              disid : 2717,
              disname : "Basti"
          },
          {
              sid : 27,
              disid : 2718,
              disname : "Bijnor"
          },
          {
              sid : 27,
              disid : 2719,
              disname : "Bulandshahr"
          },
          {
              sid : 27,
              disid : 2720,
              disname : "Chandauli(Varanasi Dehat)"
          },
          {
              sid : 27,
              disid : 2721,
              disname : "Chitrakoot"
          },
          {
              sid : 27,
              disid : 2722,
              disname : "Deoria"
          },
          {
              sid : 27,
              disid : 2723,
              disname : "Etah"
          },
          {
              sid : 27,
              disid : 2724,
              disname : "Etawah"
          },
          {
              sid : 27,
              disid : 2725,
              disname : "Faizabad"
          },
          {
              sid : 27,
              disid : 2726,
              disname : "Farrukhabad"
          },
          {
              sid : 27,
              disid : 2727,
              disname : "Fatehpur"
          },
          {
              sid : 27,
              disid : 2728,
              disname : "Firozabad"
          },
          {
              sid : 27,
              disid : 2729,
              disname : "Gautam Buddha Nagar"
          },
          {
              sid : 27,
              disid : 2730,
              disname : "Ghaziabad"
          },
          {
              sid : 27,
              disid : 2731,
              disname : "Ghazipur"
          },
          {
              sid : 27,
              disid : 2732,
              disname : "Gonda"
          },
          {
              sid : 27,
              disid : 2733,
              disname : "Gorakhpur"
          },
          {
              sid : 27,
              disid : 2734,
              disname : "Hamirpur"
          },
          {
              sid : 27,
              disid : 2735,
              disname : "Hapur"
          },
          {
              sid : 27,
              disid : 2736,
              disname : "Hardoi"
          },
          {
              sid : 27,
              disid : 2737,
              disname : "Hathras"
          },
          {
              sid : 27,
              disid : 2738,
              disname : "Jaunpur"
          },
          {
              sid : 27,
              disid : 2739,
              disname : "Jhansi"
          },
          {
              sid : 27,
              disid : 2740,
              disname : "Kannauj"
          },
          {
              sid : 27,
              disid : 2741,
              disname : "Kanpur Dehat"
          },
          {
              sid : 27,
              disid : 2742,
              disname : "Kanpur Nagar"
          },
          {
              sid : 27,
              disid : 2743,
              disname : "Kasganj"
          },
          {
              sid : 27,
              disid : 2744,
              disname : "Kaushambi"
          },
          {
              sid : 27,
              disid : 2745,
              disname : "Kushinagar"
          },
          {
              sid : 27,
              disid : 2746,
              disname : "Lakhimpur Kheri"
          },
          {
              sid : 27,
              disid : 2747,
              disname : "Lalitpur"
          },
          {
              sid : 27,
              disid : 2748,
              disname : "Lucknow"
          },
          {
              sid : 27,
              disid : 2749,
              disname : "Maharajganj"
          },
          {
              sid : 27,
              disid : 2750,
              disname : "Mahoba"
          },
          {
              sid : 27,
              disid : 2751,
              disname : "Mainpuri"
          },
          {
              sid : 27,
              disid : 2752,
              disname : "Mathura"
          },
          {
              sid : 27,
              disid : 2753,
              disname : "Mau"
          },
          {
              sid : 27,
              disid : 2754,
              disname : "Meerut"
          },
          {
              sid : 27,
              disid : 2755,
              disname : "Mirzapur"
          },
          {
              sid : 27,
              disid : 2756,
              disname : "Moradabad"
          },
          {
              sid : 27,
              disid : 2757,
              disname : "Muzaffarnagar"
          },
          {
              sid : 27,
              disid : 2758,
              disname : "Pilibhit"
          },
          {
              sid : 27,
              disid : 2759,
              disname : "Pratapgarh"
          },
          {
              sid : 27,
              disid : 2760,
              disname : "Rae Bareli"
          },
          {
              sid : 27,
              disid : 2761,
              disname : "Rampur"
          },
          {
              sid : 27,
              disid : 2762,
              disname : "Saharanpur"
          },
          {
              sid : 27,
              disid : 2763,
              disname : "Sant Kabir Nagar"
          },
          {
              sid : 27,
              disid : 2764,
              disname : "Sant Ravidas Nagar"
          },
          {
              sid : 27,
              disid : 2765,
              disname : "Sambhal"
          },
          {
              sid : 27,
              disid : 2766,
              disname : "Shahjahanpur"
          },
          {
              sid : 27,
              disid : 2767,
              disname : "Shamli"
          },
          {
              sid : 27,
              disid : 2768,
              disname : "Shravasti"
          },
          {
              sid : 27,
              disid : 2769,
              disname : "Siddharthnagar"
          },
          {
              sid : 27,
              disid : 2770,
              disname : "Sitapur"
          },
          {
              sid : 27,
              disid : 2771,
              disname : "Sonbhadra"
          },
          {
              sid : 27,
              disid : 2772,
              disname : "Sultanpur"
          },
          {
              sid : 27,
              disid : 2773,
              disname : "Unnao"
          },
          {
              sid : 27,
              disid : 2774,
              disname : "Varanasi (Kashi)"
          },



          {
              sid : 28,
              disid : 2801,
              disname : "Almora"
          },
          {
              sid : 28,
              disid : 2802,
              disname : "Bageshwar"
          },
          {
              sid : 28,
              disid : 2803,
              disname : "Chamoli"
          },
          {
              sid : 28,
              disid : 2804,
              disname : "Champawat"
          },
          {
              sid : 28,
              disid : 2805,
              disname : "Dehradun"
          },
          {
              sid : 28,
              disid : 2806,
              disname : "Haridwar"
          },
          {
              sid : 28,
              disid : 2807,
              disname : "Nainital"
          },
          {
              sid : 28,
              disid : 2808,
              disname : "Pauri Garhwal"
          },
          {
              sid : 28,
              disid : 2809,
              disname : "Pithoragarh"
          },
          {
              sid : 28,
              disid : 2810,
              disname : "Rudraprayag"
          },
          {
              sid : 28,
              disid : 2811,
              disname : "Tehri Garhwal"
          },
          {
              sid : 28,
              disid : 2812,
              disname : "Udham Singh Nagar"
          },
          {
              sid : 28,
              disid : 2813,
              disname : "Uttarkashi"
          },




          {
              sid : 29,
              disid : 2901,
              disname : "Alipurduar"
          },
          {
              sid : 29,
              disid : 2902,
              disname : "Bankura"
          },
          {
              sid : 29,
              disid : 2903,
              disname : "Birbhum"
          },
          {
              sid : 29,
              disid : 2904,
              disname : "Cooch Behar"
          },
          {
              sid : 29,
              disid : 2905,
              disname : "Dakshin Dinajpur"
          },
          {
              sid : 29,
              disid : 2906,
              disname : "Darjeeling"
          },
          {
              sid : 29,
              disid : 2907,
              disname : "Hooghly"
          },
          {
              sid : 29,
              disid : 2908,
              disname : "Howrah"
          },
          {
              sid : 29,
              disid : 2909,
              disname : "Jalpaiguri"
          },
          {
              sid : 29,
              disid : 2910,
              disname : "Jhargram"
          },
          {
              sid : 29,
              disid : 2911,
              disname : "Kalimpong"
          },
          {
              sid : 29,
              disid : 2912,
              disname : "Kolkata"
          },
          {
              sid : 29,
              disid : 2913,
              disname : "Malda"
          },
          {
              sid : 29,
              disid : 2914,
              disname : "Murshidabad"
          },
          {
              sid : 29,
              disid : 2915,
              disname : "Nadia"
          },
          {
              sid : 29,
              disid : 2916,
              disname : "North 24 Parganas"
          },
          {
              sid : 29,
              disid : 2917,
              disname : "Paschim Bardhaman"
          },
          {
              sid : 29,
              disid : 2918,
              disname : "Paschim Medinipur"
          },
          {
              sid : 29,
              disid : 2919,
              disname : "Purba Bardhaman"
          },
          {
              sid : 29,
              disid : 2920,
              disname : "Purulia"
          },
          {
              sid : 29,
              disid : 2921,
              disname : "South 24 Parganas"
          },
          {
              sid : 29,
              disid : 2922,
              disname : "Uttar Dinajpur"
          },
    ]
  }


  personalData!: any;

  getAllPersonalData() : Observable<any>{

    this.http.get('http://localhost:2020/getPersonal/userId='+this.util.getItem('username'),{withCredentials : true}).subscribe((result)=>{
        this.personalData = result;
    });

    return new Observable<any>((subscriber)=>{
        setTimeout(()=>{
            subscriber.next(this.personalData);
        },500);
    });
  }
}
