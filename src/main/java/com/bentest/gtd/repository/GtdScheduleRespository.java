package com.bentest.gtd.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.bentest.gtd.entity.GtdSchedule;
@Repository
public interface GtdScheduleRespository extends JpaRepository<GtdSchedule, Integer>, JpaSpecificationExecutor<GtdSchedule> {
	
}
