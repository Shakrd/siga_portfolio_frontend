
import { Subject } from './../app/subject';
import { SchoolPeriod } from './../app/school-period';


export interface Pea {
    id?: number;
    school_period?:SchoolPeriod;
    subject?:Subject;
    basic_bibliographies?:string[];
    complementary_bibliographies?:string[];
    student_assessment?:string;    
    created_at?:string;
    updated_at?:string;
    deleted_at?:null;
}