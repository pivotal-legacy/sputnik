package com.sputnik.campaign;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SegmentRepository extends CrudRepository<SegmentEntity, Long> {

    @Query("select distinct s from SegmentEntity s INNER JOIN s.campaigns c")
    public List<SegmentEntity> findWithCampaign();

}
