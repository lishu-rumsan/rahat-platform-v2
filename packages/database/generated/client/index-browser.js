
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  gender: 'gender',
  email: 'email',
  phone: 'phone',
  wallet: 'wallet',
  extras: 'extras',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isSystem: 'isSystem',
  expiry: 'expiry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  action: 'action',
  subject: 'subject',
  inverted: 'inverted',
  conditions: 'conditions',
  reason: 'reason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserRoleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roleId: 'roleId',
  expiry: 'expiry',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
};

exports.Prisma.AuthScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  service: 'service',
  serviceId: 'serviceId',
  details: 'details',
  challenge: 'challenge',
  falseAttempts: 'falseAttempts',
  isLocked: 'isLocked',
  lockedOnAt: 'lockedOnAt',
  lastLoginAt: 'lastLoginAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuthSessionScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  sessionId: 'sessionId',
  authId: 'authId',
  ip: 'ip',
  details: 'details',
  userAgent: 'userAgent',
  createdAt: 'createdAt'
};

exports.Prisma.SignupScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  userIdentifier: 'userIdentifier',
  data: 'data',
  status: 'status',
  rejectedReason: 'rejectedReason',
  approvedBy: 'approvedBy',
  approvedAt: 'approvedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SettingScalarFieldEnum = {
  name: 'name',
  value: 'value',
  dataType: 'dataType',
  requiredFields: 'requiredFields',
  isReadOnly: 'isReadOnly',
  isPrivate: 'isPrivate'
};

exports.Prisma.BeneficiaryScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  gender: 'gender',
  walletAddress: 'walletAddress',
  birthDate: 'birthDate',
  age: 'age',
  location: 'location',
  latitude: 'latitude',
  longitude: 'longitude',
  extras: 'extras',
  notes: 'notes',
  bankedStatus: 'bankedStatus',
  internetStatus: 'internetStatus',
  phoneStatus: 'phoneStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  isVerified: 'isVerified'
};

exports.Prisma.GroupedBeneficiariesScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  beneficiaryGroupId: 'beneficiaryGroupId',
  beneficiaryId: 'beneficiaryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.BeneficiaryGroupScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.BeneficiaryGroupProjectScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  projectId: 'projectId',
  beneficiaryGroupId: 'beneficiaryGroupId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.BeneficiaryProjectScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  projectId: 'projectId',
  beneficiaryId: 'beneficiaryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.BeneficiaryPiiScalarFieldEnum = {
  beneficiaryId: 'beneficiaryId',
  name: 'name',
  phone: 'phone',
  email: 'email',
  extras: 'extras'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  status: 'status',
  type: 'type',
  contractAddress: 'contractAddress',
  extras: 'extras',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.StatsScalarFieldEnum = {
  name: 'name',
  data: 'data',
  group: 'group',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VendorsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  email: 'email',
  phone: 'phone',
  location: 'location',
  wallet: 'wallet',
  extras: 'extras',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProjectVendorsScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  vendorId: 'vendorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  extras: 'extras'
};

exports.Prisma.GrievanceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  reportedBy: 'reportedBy',
  reporterUserId: 'reporterUserId',
  reporterContact: 'reporterContact',
  title: 'title',
  type: 'type',
  projectId: 'projectId',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  UNKNOWN: 'UNKNOWN'
};

exports.Service = exports.$Enums.Service = {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  WALLET: 'WALLET',
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN'
};

exports.SignupStatus = exports.$Enums.SignupStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  FAILED: 'FAILED',
  REJECTED: 'REJECTED'
};

exports.SettingDataType = exports.$Enums.SettingDataType = {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  OBJECT: 'OBJECT'
};

exports.BankedStatus = exports.$Enums.BankedStatus = {
  UNKNOWN: 'UNKNOWN',
  UNBANKED: 'UNBANKED',
  BANKED: 'BANKED',
  UNDER_BANKED: 'UNDER_BANKED'
};

exports.InternetStatus = exports.$Enums.InternetStatus = {
  UNKNOWN: 'UNKNOWN',
  NO_INTERNET: 'NO_INTERNET',
  HOME_INTERNET: 'HOME_INTERNET',
  MOBILE_INTERNET: 'MOBILE_INTERNET'
};

exports.PhoneStatus = exports.$Enums.PhoneStatus = {
  UNKNOWN: 'UNKNOWN',
  NO_PHONE: 'NO_PHONE',
  FEATURE_PHONE: 'FEATURE_PHONE',
  SMART_PHONE: 'SMART_PHONE'
};

exports.ProjectStatus = exports.$Enums.ProjectStatus = {
  NOT_READY: 'NOT_READY',
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED'
};

exports.GrievanceType = exports.$Enums.GrievanceType = {
  TECHNICAL: 'TECHNICAL',
  NON_TECHNICAL: 'NON_TECHNICAL',
  OTHER: 'OTHER'
};

exports.GrievanceStatus = exports.$Enums.GrievanceStatus = {
  NEW: 'NEW',
  UNDER_REVIEW: 'UNDER_REVIEW',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  Permission: 'Permission',
  UserRole: 'UserRole',
  Auth: 'Auth',
  AuthSession: 'AuthSession',
  Signup: 'Signup',
  Setting: 'Setting',
  Beneficiary: 'Beneficiary',
  GroupedBeneficiaries: 'GroupedBeneficiaries',
  BeneficiaryGroup: 'BeneficiaryGroup',
  BeneficiaryGroupProject: 'BeneficiaryGroupProject',
  BeneficiaryProject: 'BeneficiaryProject',
  BeneficiaryPii: 'BeneficiaryPii',
  Project: 'Project',
  Stats: 'Stats',
  Vendors: 'Vendors',
  ProjectVendors: 'ProjectVendors',
  Grievance: 'Grievance'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
