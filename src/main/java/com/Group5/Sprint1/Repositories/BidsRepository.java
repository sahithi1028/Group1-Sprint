package com.Group5.Sprint1.Repositories;

import com.Group5.Sprint1.Models.BidsModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BidsRepository extends JpaRepository<BidsModel,Integer> {
    List<BidsModel> findByMatchId(int match);
}
