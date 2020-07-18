$p.set = ($control, val) => { };
$p.apiGet = getRequest;
$p.apiCreate = createRequest;
$p.apiUpdate = updateRequest;
$p.apiDelete = deleteRequest;
$p.apiUsersGet = usersGetRequest;
$p.apiUsersCreate = usersCreateRequest;
$p.apiUsersUpdate = usersUpdateRequest;
$p.apiUsersDelete = usersDeleteRequest;
$p.apiSendMail = sendMailRequest;
$p.id = () => { };
$p.send = data => { };
$p.siteId = () => { };
$p.getColumnName = name => { };
$p.getControl = labelName => { };
$p.getField = labelName => { };
$p.clearMessage = () => { };
$p.setMessage = (target, value) => { };
$p.loginId = () => { };
$p.userId = () => { };
$p.userName = () => { };
$p.referenceType = () => { };
$p.getGridCell = (id, name) => { };
$p.getGridColumnIndex = name => { };
$p.getGridRow = id => { };
$p.before_validate_Create = () => { };
$p.before_validate_Update = () => { };
$p.before_validate_Delete = () => { };
$p.after_validate_Create = () => { };
$p.after_validate_Update = () => { };
$p.after_validate_Delete = () => { };
$p.before_send_Create = () => { };
$p.before_send_Update = () => { };
$p.before_send_Delete = () => { };
$p.after_send_Create = () => { };
$p.after_send_Update = () => { };
$p.after_send_Delete = () => { };
$p.before_set_Create = () => { };
$p.before_set_Update = () => { };
$p.before_set_Delete = () => { };
$p.after_set_Create = () => { };
$p.after_set_Update = () => { };
$p.after_set_Delete = () => { };
$p.after_set_GridRows = () => { };
$p.on_editor_load = () => { };
$p.on_grid_load = () => { };

const getRequest = ({
    async = true,
    id = 0,
    data = dataOfGetRequest,
    done = (data = getResponseData) => { },
    fail = data => { },
    always = data => { }
}) => $p.apiGet();

const createRequest = ({
    async = true,
    id = 0,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiCreate();

const updateRequest = ({
    async = true,
    id = 0,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUpdate();

const deleteRequest = ({
    async = true,
    id = 0,
    data = dataOfBaseRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiDelete();

const usersGetRequest = ({
    async = true,
    data = dataOfUsersGetRequest,
    done = (data = getResponseData) => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersGet();

const usersCreateRequest = ({
    async = true,
    data = dataOfUsersCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersCreate();

const usersUpdateRequest = ({
    async = true,
    id = 0,
    data = dataOfUsersCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersUpdate();

const usersDeleteRequest = ({
    async = true,
    id = 0,
    data = dataOfBaseRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersDelete();

const sendMailRequest = ({
    async = true,
    id = 0,
    data = dataOfSendMailRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiSendMail();

const dataOfBaseRequest = ({
    ApiVersion = 1.1,
    ApiKey = ""
}) => { };

const dataOfGetRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    View: ViewItems
};

const dataOfUsersGetRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    View: ViewUsers
}

const dataOfCreateAndUpdateRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    ClassHash: Class,
    NumHash: Num,
    DateHash: Date,
    DescriptionHash: Description,
    CheckHash: Check
};

const dataOfUsersCreateAndUpdateRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

const dataOfSendMailRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    From: "",
    To: "",
    Cc: "",
    Bcc: "",
    Title: "",
    Body: ""
};

const ViewItems = {
    ColumnFilterHash: ColumnFilterHashItems,
    ColumnSorterHash:{}
};

const ViewUsers = {
    ColumnFilterHash: ColumnFilterHashUsers,
    ColumnSorterHash:{}
};

let SiteId;
let IssueId;
let ResultId;
let Body;
let StartTime;
let CompletionTime;
let WorkValue;
let ProgressRate;
let RemainingWorkValue;
let UpdateTime;
let Ver;
let Title;
let Status;
let Manager;
let Owner;
let Comments;
let Creator;
let Updator;
let CreatedTime;
let ItemTitle;
let ClassA;
let ClassB;
let ClassC;
let ClassD;
let ClassE;
let ClassF;
let ClassG;
let ClassH;
let ClassI;
let ClassJ;
let ClassK;
let ClassL;
let ClassM;
let ClassN;
let ClassO;
let ClassP;
let ClassQ;
let ClassR;
let ClassS;
let ClassT;
let ClassU;
let ClassV;
let ClassW;
let ClassX;
let ClassY;
let ClassZ;
let NumA;
let NumB;
let NumC;
let NumD;
let NumE;
let NumF;
let NumG;
let NumH;
let NumI;
let NumJ;
let NumK;
let NumL;
let NumM;
let NumN;
let NumO;
let NumP;
let NumQ;
let NumR;
let NumS;
let NumT;
let NumU;
let NumV;
let NumW;
let NumX;
let NumY;
let NumZ;
let DateA;
let DateB;
let DateC;
let DateD;
let DateE;
let DateF;
let DateG;
let DateH;
let DateI;
let DateJ;
let DateK;
let DateL;
let DateM;
let DateN;
let DateO;
let DateP;
let DateQ;
let DateR;
let DateS;
let DateT;
let DateU;
let DateV;
let DateW;
let DateX;
let DateY;
let DateZ;
let DescriptionA;
let DescriptionB;
let DescriptionC;
let DescriptionD;
let DescriptionE;
let DescriptionF;
let DescriptionG;
let DescriptionH;
let DescriptionI;
let DescriptionJ;
let DescriptionK;
let DescriptionL;
let DescriptionM;
let DescriptionN;
let DescriptionO;
let DescriptionP;
let DescriptionQ;
let DescriptionR;
let DescriptionS;
let DescriptionT;
let DescriptionU;
let DescriptionV;
let DescriptionW;
let DescriptionX;
let DescriptionY;
let DescriptionZ;
let CheckA;
let CheckB;
let CheckC;
let CheckD;
let CheckE;
let CheckF;
let CheckG;
let CheckH;
let CheckI;
let CheckJ;
let CheckK;
let CheckL;
let CheckM;
let CheckN;
let CheckO;
let CheckP;
let CheckQ;
let CheckR;
let CheckS;
let CheckT;
let CheckU;
let CheckV;
let CheckW;
let CheckX;
let CheckY;
let CheckZ;
let UserId;
let Ver;
let LoginId;
let Name;
let UserCode;
let Birthday;
let Gender;
let Language;
let TimeZone;
let DeptCode;
let Body;
let LastLoginTime;
let PasswordExpirationTime;
let PasswordChangeTime;
let NumberOfLogins;
let NumberOfDenial;
let TenantManager;
let Disabled;
let Lockout;
let LockoutCounter;
let Comments;
let Creator;
let Updator;
let CreatedTime;
let UpdatedTime;
let StatusCode;
let Offset;
let PageSize;
let TotalCount;
let ColumnSorterHash = {};

const ColumnFilterHashItems = {
    SiteId: 0,
    IssueId: 0,
    ResultId: 0,
    Body: "",
    StartTime,
    CompletionTime,
    WorkValue,
    ProgressRate,
    RemainingWorkValue,
    UpdateTime,
    Ver,
    Title: "",
    Status: "",
    Manager: 0,
    Owner: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    ItemTitle,
    ClassA: "",
    ClassB: "",
    ClassC: "",
    ClassD: "",
    ClassE: "",
    ClassF: "",
    ClassG: "",
    ClassH: "",
    ClassI: "",
    ClassJ: "",
    ClassK: "",
    ClassL: "",
    ClassM: "",
    ClassN: "",
    ClassO: "",
    ClassP: "",
    ClassQ: "",
    ClassR: "",
    ClassS: "",
    ClassT: "",
    ClassU: "",
    ClassV: "",
    ClassW: "",
    ClassX: "",
    ClassY: "",
    ClassZ: "",
    NumA: 0,
    NumB: 0,
    NumC: 0,
    NumD: 0,
    NumE: 0,
    NumF: 0,
    NumG: 0,
    NumH: 0,
    NumI: 0,
    NumJ: 0,
    NumK: 0,
    NumL: 0,
    NumM: 0,
    NumN: 0,
    NumO: 0,
    NumP: 0,
    NumQ: 0,
    NumR: 0,
    NumS: 0,
    NumT: 0,
    NumU: 0,
    NumV: 0,
    NumW: 0,
    NumX: 0,
    NumY: 0,
    NumZ: 0,
    DateA,
    DateB,
    DateC,
    DateD,
    DateE,
    DateF,
    DateG,
    DateH,
    DateI,
    DateJ,
    DateK,
    DateL,
    DateM,
    DateN,
    DateO,
    DateP,
    DateQ,
    DateR,
    DateS,
    DateT,
    DateU,
    DateV,
    DateW,
    DateX,
    DateY,
    DateZ,
    DescriptionA: "",
    DescriptionB: "",
    DescriptionC: "",
    DescriptionD: "",
    DescriptionE: "",
    DescriptionF: "",
    DescriptionG: "",
    DescriptionH: "",
    DescriptionI: "",
    DescriptionJ: "",
    DescriptionK: "",
    DescriptionL: "",
    DescriptionM: "",
    DescriptionN: "",
    DescriptionO: "",
    DescriptionP: "",
    DescriptionQ: "",
    DescriptionR: "",
    DescriptionS: "",
    DescriptionT: "",
    DescriptionU: "",
    DescriptionV: "",
    DescriptionW: "",
    DescriptionX: "",
    DescriptionY: "",
    DescriptionZ: "",
    CheckA: true,
    CheckB: true,
    CheckC: true,
    CheckD: true,
    CheckE: true,
    CheckF: true,
    CheckG: true,
    CheckH: true,
    CheckI: true,
    CheckJ: true,
    CheckK: true,
    CheckL: true,
    CheckM: true,
    CheckN: true,
    CheckO: true,
    CheckP: true,
    CheckQ: true,
    CheckR: true,
    CheckS: true,
    CheckT: true,
    CheckU: true,
    CheckV: true,
    CheckW: true,
    CheckX: true,
    CheckY: true,
    CheckZ: true
};

const ColumnFilterHashUsers = {
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

const getResponseData = {
    StatusCode,
    Response: {
        Offset,
        PageSize,
        TotalCount,
        Data: {
            ClassHash: Class,
            NumHash: Num,
            DateHash: Date,
            DescriptionHash: Description,
            CheckHash: Check
        }
    }
};

const Class = {
    ClassA,
    ClassB,
    ClassC,
    ClassD,
    ClassE,
    ClassF,
    ClassG,
    ClassH,
    ClassI,
    ClassJ,
    ClassK,
    ClassL,
    ClassM,
    ClassN,
    ClassO,
    ClassP,
    ClassQ,
    ClassR,
    ClassS,
    ClassT,
    ClassU,
    ClassV,
    ClassW,
    ClassX,
    ClassY,
    ClassZ
};

const Num = {
    NumA,
    NumB,
    NumC,
    NumD,
    NumE,
    NumF,
    NumG,
    NumH,
    NumI,
    NumJ,
    NumK,
    NumL,
    NumM,
    NumN,
    NumO,
    NumP,
    NumQ,
    NumR,
    NumS,
    NumT,
    NumU,
    NumV,
    NumW,
    NumX,
    NumY,
    NumZ
};

const Date = {
    DateA,
    DateB,
    DateC,
    DateD,
    DateE,
    DateF,
    DateG,
    DateH,
    DateI,
    DateJ,
    DateK,
    DateL,
    DateM,
    DateN,
    DateO,
    DateP,
    DateQ,
    DateR,
    DateS,
    DateT,
    DateU,
    DateV,
    DateW,
    DateX,
    DateY,
    DateZ
};

const Description = {
    DescriptionA,
    DescriptionB,
    DescriptionC,
    DescriptionD,
    DescriptionE,
    DescriptionF,
    DescriptionG,
    DescriptionH,
    DescriptionI,
    DescriptionJ,
    DescriptionK,
    DescriptionL,
    DescriptionM,
    DescriptionN,
    DescriptionO,
    DescriptionP,
    DescriptionQ,
    DescriptionR,
    DescriptionS,
    DescriptionT,
    DescriptionU,
    DescriptionV,
    DescriptionW,
    DescriptionX,
    DescriptionY,
    DescriptionZ
};

const Check = {
    CheckA,
    CheckB,
    CheckC,
    CheckD,
    CheckE,
    CheckF,
    CheckG,
    CheckH,
    CheckI,
    CheckJ,
    CheckK,
    CheckL,
    CheckM,
    CheckN,
    CheckO,
    CheckP,
    CheckQ,
    CheckR,
    CheckS,
    CheckT,
    CheckU,
    CheckV,
    CheckW,
    CheckX,
    CheckY,
    CheckZ
};