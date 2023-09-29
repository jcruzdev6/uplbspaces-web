<template>
    <div>
        <PageBreadcrumbs page_name="My Account" />
        <div class="container-fluid" id="innerpage">
            <div class="container-lg" id="innerpageBody">
                <Form id="accountForm" @submit="updateProfile" :validation-schema="schema" v-slot="{ errors }" enctype="multipart/form-data">
                <Field name="id" type="hidden" :value="auth.profile.id" v-model="auth.profile.id" />
                <Field name="email" type="hidden" :value="auth.profile.email" v-model="auth.profile.email" />
                <div id="innerpageBodyContentAccount">
                    <div class="accountsPageHead">
                        <div>
                        My Account
                        </div>
                        <div :class="(success) ? 'msgSuccess' : 'msgError'">{{ message }}</div>
                        <!--<div>
                            <div class="profileSquare">
                                <div class="profileSquarePhoto"><i class="fa-solid fa-user"></i></div>
                                <a href="#">Edit Photo</a>
                            </div>
                        </div>-->
                    </div>
                    <div class="accountsPageBlock">
                        <div class="accountsPageBlockHead">Account Info</div>
                        <div class="accountsPageBlockRow">
                            <div>Email:</div>
                            <div>{{ auth.profile.email }}</div>
                        </div>
                        <div class="accountsPageBlockRow"></div>
                        <div class="accountsPageBlockHead">Personal Info</div>
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-firstname">First Name:</label>
                            <Field name="first_name" type="text" :value="auth.profile.first_name" v-model="auth.profile.first_name" id="profileForm-firstname" :class="{ 'is-invalid': errors.first_name }" class="form-control form-control-sm rounded" placeholder="" />
                            <div v-if="errors.first_name">&nbsp;</div><div v-if="errors.first_name" class="msgError">{{errors.first_name}}</div>
                        </div>
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-lastname">Last Name:</label>
                            <Field name="last_name" type="text" :value="auth.profile.first_name" v-model="auth.profile.last_name" id="profileForm-lastname" :class="{ 'is-invalid': errors.last_name }" class="form-control form-control-sm rounded" placeholder="" />
                            <div v-if="errors.last_name">&nbsp;</div><div v-if="errors.last_name" class="msgError">{{errors.last_name}}</div>
                        </div>
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-accounttype">Account Type:</label>
                            <Field name="account_type" as="select" v-model="auth.profile.account_type" id="profileForm-accounttype" :class="{ 'is-invalid': errors.account_type }" class="form-control form-control-sm rounded">
                                <option value="">Select account type</option>
                                <option value="UP Staff">UP Staff</option>
                                <option value="UP Student">UP Student</option>
                                <option value="Guest">Guest</option>
                            </Field>
                            <div v-if="errors.account_type">&nbsp;</div><div v-if="errors.account_type" class="msgError">{{errors.account_type}}</div>
                        </div>
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-accounttype">Department Unit:</label>
                            <Field name="department_unit_id" as="select" v-model="auth.profile.department_unit_id" id="profileForm-departmentunit" :class="{ 'is-invalid': errors.account_type }" class="form-control form-control-sm rounded">
                                <option value="">Select department</option>
                                <option v-for="(dept_unit, index) in dept.department_units"
                                    :key="index" :value="dept_unit.id">{{ (dept_unit.parent_id) ? dept_unit.parent_name + ' > ' + dept_unit.name : dept_unit.name }}</option>                                
                            </Field>
                            <div v-if="errors.department_unit_id">&nbsp;</div><div v-if="errors.department_unit_id" class="msgError">{{errors.department_unit_id}}</div>
                        </div>    
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-organization">Organization:</label>
                            <Field name="organization" type="text" v-model="auth.profile.organization" id="profileForm-organization" :class="{ 'is-invalid': errors.organization }" class="form-control form-control-sm rounded" placeholder="" />
                            <div v-if="errors.organization">&nbsp;</div><div v-if="errors.organization" class="msgError">{{errors.organization}}</div>
                        </div>     
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-organization">ID Type:</label>
                            <Field name="id_type" as="select" v-model="auth.profile.id_type" id="profileForm-idtype"  :class="{ 'is-invalid': errors.id_type }" class="form-control form-control-sm rounded">
                                <option value="">Select ID type</option>
                                <option value="Employee ID">Employee ID</option>
                                <option value="Student ID">Student ID</option>
                                <option value="Drivers License">Drivers License</option>
                                <option value="Passport">Passport</option>
                                <option value="UMID">UMID</option>
                            </Field>
                            <div v-if="errors.id_type">&nbsp;</div><div v-if="errors.id_type" class="msgError">{{errors.id_type}}</div>
                        </div>  
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-organization">ID No.:</label>
                            <Field name="id_no" type="text" v-model="auth.profile.id_no" id="profileForm-idno" :class="{ 'is-invalid': errors.id_no }" class="form-control form-control-sm rounded" placeholder="" />
                            <div v-if="errors.id_no">&nbsp;</div><div v-if="errors.id_no" class="msgError">{{errors.id_no}}</div>
                        </div>      
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-organization">ID File:</label>
                            <Field name="id_file" type="file" id="profileForm-idfilepath" :class="{ 'is-invalid': errors.id_file }" class="form-control form-control-sm rounded" placeholder="" />
                            <div>&nbsp;</div><div v-if="auth.profile.id_binary"><img :src="auth.profile.id_binary" class="rounded float-start mt-1" height="150" alt="ID File" /></div>
                            <div v-if="errors.id_file">&nbsp;</div><div v-if="errors.id_file" class="msgError">{{errors.id_file}}</div>
                        </div>   
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-createdat">Created:</label>
                            <div>{{ auth.profile.created_at }}</div>
                        </div>          
                        <div class="accountsPageBlockRow">
                            <label for="profileForm-createdat">Last Modified:</label>
                            <div>{{ auth.profile.updated_at }}</div>
                        </div>      
                        <div class="accountsPageBlockRowSpan">
                            <div>
                                <button type="submit" class="btn btn-success mt-2 mb-2 rounded">Save</button>&nbsp;
                                <button type="reset" class="btn btn-light mt-2 mb-2 rounded">Reset</button>
                            </div>
                        </div>       
                    </div>
                </div>
                </Form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
  
definePageMeta({
    middleware: ["auth"]
})

const auth = useAuthStore();
const dept = useDepartmentUnitStore();
const schema = Yup.object().shape({
    first_name: Yup.string()
        .required('First Name is required'),     
    last_name: Yup.string()
        .required('Last Name is required'),     
    account_type: Yup.string()
        .required('Account Type is required'),    
});
const message = ref("");
const success = ref(true);

  

await auth.fetchUserProfile();
await dept.fetchDepartmentUnits();

const updateProfile = async (values) => {
    let formData = new FormData();

    for (const field in values) {
        formData.append(field, values[field]);
    }
    //formData.append('_method', 'PUT');
    console.log('boundary:', formData._boundary);
  
    const { data, error } = await auth.updateProfile(formData);
    
    if (!error.value) {
      console.log('update profile successful')
      message.value = 'Successful! Profile has been updated.';
      success.value = true;
    } else {
      message.value = error.value.data.message;
      success.value = false;
    }
    scrollToTop();
}

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
}
    
</script>