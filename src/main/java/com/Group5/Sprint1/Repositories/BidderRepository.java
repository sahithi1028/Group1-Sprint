package com.Group5.Sprint1.Repositories;


import com.Group5.Sprint1.Models.BidderModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BidderRepository extends JpaRepository<BidderModel, Integer> {
    Optional<BidderModel> findByEmail(String email);
}
