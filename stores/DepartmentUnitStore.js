import { defineStore } from "pinia";

export const useDepartmentUnitStore = defineStore("department_unit", {
    state: () => ({
        department_units: null,
        department_unit: null
    }),
    getters: {
        getDepartmentUnitById: (state) => {
          return (deptUnitId) => state.department_units.find((dept) => dept.id === deptUnitId)
        },
      },    
    actions: {
        async fetchDepartmentUnits() {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/department_units')
            
            this.department_units = results.data;
        },  
        async fetchDepartmentUnit(id) {
            const department_unit = this.department_units.filter((item) => {
                return item['id'] == id      
            });
            this.department_unit = department_unit[0];
        },     
    },
});