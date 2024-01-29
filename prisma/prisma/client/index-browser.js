
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  regionName: 'regionName',
  provinceName: 'provinceName',
  districtName: 'districtName',
  subdistrictName: 'subdistrictName',
  zipcode: 'zipcode'
};

exports.Prisma.HouseholdScalarFieldEnum = {
  id: 'id',
  addressId: 'addressId',
  addressDetail: 'addressDetail',
  houseType: 'houseType',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.CarbonFootprintScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  householdElectricityId: 'householdElectricityId',
  householdWaterSupplyId: 'householdWaterSupplyId',
  householdOtherEnergyId: 'householdOtherEnergyId',
  transportaionId: 'transportaionId',
  totalCarbonFootprint: 'totalCarbonFootprint',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.EmissionFactorScalarFieldEnum = {
  id: 'id',
  sourceType: 'sourceType',
  name: 'name',
  carbonCoefficient: 'carbonCoefficient',
  unit: 'unit',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.VehiclePropertyScalarFieldEnum = {
  id: 'id',
  modelType: 'modelType',
  consumptionRate: 'consumptionRate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.PrivateVehicleScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  emissionFactorId: 'emissionFactorId',
  vehiclePropertyId: 'vehiclePropertyId',
  startMonthDistance: 'startMonthDistance',
  endMonthDistance: 'endMonthDistance',
  fuelComsumptionPerMonth: 'fuelComsumptionPerMonth',
  isRegularMaintain: 'isRegularMaintain',
  carbonEmissionEq: 'carbonEmissionEq',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.TransportationScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  totalCarbonFootprint: 'totalCarbonFootprint',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.HouseholdElectricityScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  totalCarbonFootprint: 'totalCarbonFootprint',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.ElectricityBillScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  emissionFactorId: 'emissionFactorId',
  amountConsumption: 'amountConsumption',
  electricityMeter: 'electricityMeter',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.HouseholdWaterSupplyScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  totalCarbonFootprint: 'totalCarbonFootprint',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.WaterBillScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  emissionFactorId: 'emissionFactorId',
  amountConsumption: 'amountConsumption',
  waterMeter: 'waterMeter',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.HouseholdOtherEnergyScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  totalCarbonFootprint: 'totalCarbonFootprint',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.OtherEnergyConsumptionScalarFieldEnum = {
  id: 'id',
  householdId: 'householdId',
  emissionFactorId: 'emissionFactorId',
  energyUsageType: 'energyUsageType',
  amountConsumption: 'amountConsumption',
  recordedDate: 'recordedDate',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber',
  profileImg: 'profileImg',
  isStaff: 'isStaff',
  isActive: 'isActive',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.ProfilePermissionScalarFieldEnum = {
  id: 'id',
  profileId: 'profileId',
  teamId: 'teamId',
  canEditSubdistrict: 'canEditSubdistrict',
  canGrant: 'canGrant',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  addressId: 'addressId',
  title: 'title',
  maximumLevel: 'maximumLevel',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.HouseType = exports.$Enums.HouseType = {
  SINGLE_HOUSE: 'SINGLE_HOUSE',
  TOWNHOUSE: 'TOWNHOUSE',
  CONDO: 'CONDO',
  APARTMENT: 'APARTMENT'
};

exports.SourceType = exports.$Enums.SourceType = {
  PRIVATE_VEHICLE: 'PRIVATE_VEHICLE',
  PUBLIC_VEHICLE: 'PUBLIC_VEHICLE',
  ELECTRICITY: 'ELECTRICITY',
  WATER_SUPPLY: 'WATER_SUPPLY',
  COOKING: 'COOKING',
  HEATING: 'HEATING',
  COOLING: 'COOLING',
  COMBUSTION: 'COMBUSTION'
};

exports.ModelType = exports.$Enums.ModelType = {
  MODEL_1500_CC: 'MODEL_1500_CC',
  MODEL_1600_CC: 'MODEL_1600_CC',
  MODEL_1800_CC: 'MODEL_1800_CC',
  MODEL_2000_CC: 'MODEL_2000_CC',
  NGV: 'NGV',
  LPG: 'LPG'
};

exports.EnergyUsageType = exports.$Enums.EnergyUsageType = {
  HEATING: 'HEATING',
  COOKING: 'COOKING',
  COOLING: 'COOLING',
  COMBUSTION: 'COMBUSTION'
};

exports.MaximumLevel = exports.$Enums.MaximumLevel = {
  PROVINCE: 'PROVINCE',
  DISTRICT: 'DISTRICT',
  SUBDISTRICT: 'SUBDISTRICT'
};

exports.Prisma.ModelName = {
  Address: 'Address',
  Household: 'Household',
  CarbonFootprint: 'CarbonFootprint',
  EmissionFactor: 'EmissionFactor',
  VehicleProperty: 'VehicleProperty',
  PrivateVehicle: 'PrivateVehicle',
  Transportation: 'Transportation',
  HouseholdElectricity: 'HouseholdElectricity',
  ElectricityBill: 'ElectricityBill',
  HouseholdWaterSupply: 'HouseholdWaterSupply',
  WaterBill: 'WaterBill',
  HouseholdOtherEnergy: 'HouseholdOtherEnergy',
  OtherEnergyConsumption: 'OtherEnergyConsumption',
  Profile: 'Profile',
  ProfilePermission: 'ProfilePermission',
  Team: 'Team'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
