"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject;
(function (Subject) {
    Subject["Biology"] = "Biology";
    Subject["Chemistry"] = "Chemistry";
    Subject["Computer"] = "Computer";
    Subject["Earth"] = "Earth";
    Subject["Energy"] = "Energy";
    Subject["General"] = "General";
    Subject["Math"] = "Math";
    Subject["Physics"] = "Physics";
    Subject["Space"] = "Space";
    Subject["Unknown"] = "Unknown";
    // Multi-subjects
    Subject["BiologyChemistry"] = "Biochemistry";
    Subject["ChemistryPhysics"] = "Physical science";
    Subject["EarthSpace"] = "Earth and space";
    Subject["All"] = "All"; // deprecated, for backwards compatibility
})(Subject || (Subject = {}));
exports.default = Subject;
