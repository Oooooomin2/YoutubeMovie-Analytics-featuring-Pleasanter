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
    id,
    data = dataOfGetRequest,
    done = (data = getResponseData) => { },
    fail = data => { },
    always = data => { }
}) => $p.apiGet();

const createRequest = ({
    async = true,
    id,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiCreate();

const updateRequest = ({
    async = true,
    id,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUpdate();

const deleteRequest = ({
    async = true,
    id,
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
    id,
    data = dataOfUsersCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersUpdate();

const usersDeleteRequest = ({
    async = true,
    id,
    data = dataOfBaseRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersDelete();

const sendMailRequest = ({
    async = true,
    id,
    data = dataOfSendMailRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiSendMail();

const dataOfBaseRequest = ({
    ApiVersion = 1.1,
    ApiKey = ""
}) => { };

const dataOfGetRequest = ({
    ApiVersion = 1.1,
    ApiKey = "",
    View = ViewItems
}) => { }

const dataOfUsersGetRequest = ({
    ApiVersion = 1.1,
    ApiKey = "",
    View: ViewUsers
}) => { }

const dataOfCreateAndUpdateRequest = ({
    ApiVersion = 1.1,
    ApiKey = "",
    ClassHash: Class,
    NumHash: Num,
    DateHash: Date,
    DescriptionHash: Description,
    CheckHash: Check
}) => { };

const dataOfUsersCreateAndUpdateRequest = ({
    ApiVersion = 1.1,
    ApiKey = "",
    UserId,
    Ver,
    LoginId,
    Name,
    UserCode,
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode,
    Body,
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins,
    NumberOfDenial,
    TenantManager,
    Disabled,
    Lockout,
    LockoutCounter,
    Comments,
    Creator,
    Updator,
    CreatedTime,
    UpdatedTime
}) => { };

const dataOfSendMailRequest = ({
    ApiVersion = 1.1,
    ApiKey = "",
    From,
    To,
    Cc,
    Bcc,
    Title,
    Body
}) => { };

const ViewItems = ({
    ColumnFilterHash = ColumnFilterHashItems,
    ColumnSorterHash
}) => { };

const ViewUsers = ({
    ColumnFilterHash: ColumnFilterHashUsers,
    ColumnSorterHash
}) => { };

const ColumnFilterHashItems = ({
    SiteId,
    IssueId,
    ResultId,
    Body,
    StartTime,
    CompletionTime,
    WorkValue,
    ProgressRate,
    RemainingWorkValue,
    UpdateTime,
    Ver,
    Title,
    Status,
    Manager,
    Owner,
    Comments,
    Creator,
    Updator,
    CreatedTime,
    ItemTitle,
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
    ClassZ,
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
    NumZ,
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
    DescriptionZ,
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
}) => { };

const ColumnFilterHashUsers = ({
    UserId,
    Ver,
    LoginId,
    Name,
    UserCode,
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode,
    Body,
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins,
    NumberOfDenial,
    TenantManager,
    Disabled,
    Lockout,
    LockoutCounter,
    Comments,
    Creator,
    Updator,
    CreatedTime,
    UpdatedTime
}) => { };

const getResponseData = ({
    StatusCode,
    Response,
}) => { };

const Response = ({
    Offset,
    PageSize,
    TotalCount,
    Data = {
        ClassHash: Class,
        NumHash: Num,
        DateHash: Date,
        DescriptionHash: Description,
        CheckHash: Check
    }
}) => { };

const Class = ({
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
}) => { };

const Num = ({
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
}) => { };

const Date = ({
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
}) => { };

const Description = ({
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
}) => { };

const Check = ({
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
}) => { };